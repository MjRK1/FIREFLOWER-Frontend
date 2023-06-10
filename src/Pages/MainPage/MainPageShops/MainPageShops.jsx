import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { LoadingOutlined } from '@ant-design/icons';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';
import SHOP_IMG from '../../../assets/images/shop.png';
import { ShopCard } from "./ShopCard";
import {message} from "../../../commonComponents/message/message";
import { Fireflower } from "../../../Services/Fireflower/Fireflower";
import {FIREFLOWER_URL} from "../../../Services/constants";

const SHOPS = Array.from({length: 6}, (_, i) => ({
  id: i+1,
  type: 'flower',
  image: SHOP_IMG,
  name: 'Цветок',
}));


export const MainPageShops = () => {
  const [shopsList, setShopsList] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios.get(`${FIREFLOWER_URL}GetAllShop`)
      .then((resp) => {
        setShopsList(resp?.data);
        setLoading(false);
    })
    .catch((err) => {
      message.error(err);
      setShopsList(SHOPS);
      setLoading(false);
    });
  }, []);

  if (isLoading) return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <LoadingOutlined
        style={{
          fontSize: 80,
          color: '#ff8f51'
        }}
        spin
      />
    </div>
  );
  return (
    <div className="main-page-products">
      <div className="main-page-products__products-list">
        {shopsList?.map(item => (
          <ShopCard
            key={item?.id}
            shop={item}
          />
        ))}
      </div>
    </div>
  );
};
