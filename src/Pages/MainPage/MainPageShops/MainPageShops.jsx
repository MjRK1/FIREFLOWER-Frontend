import React, { useEffect, useState } from "react";
import { LoadingOutlined } from '@ant-design/icons';
// eslint-disable-next-line import/no-extraneous-dependencies
import { nanoid } from 'nanoid';
import SHOP_IMG from '../../../assets/images/shop.png';
import { ShopCard } from "./ShopCard";
import { message } from "../../../commonComponents/message/message";
import { Fireflower } from "../../../Services/Fireflower/Fireflower";
import { ShopModal } from "./ShopModal";


// const SHOPS = Array.from({length: 6}, (_, i) => ({
//   id: i+1,
//   type: 'flower',
//   image: SHOP_IMG,
//   name: 'Цветок',
// }));


export const MainPageShops = () => {
  const [shopsList, setShopsList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isShopOpen, setShopOpen] = useState({shop: null, isOpen: false});


  useEffect(() => {
    setLoading(true);
    Fireflower.getShops()
      .then((resp) => {
        let shops = resp?.data?.map(item => (
          {...item,
            rating: [],
          }));
        setShopsList(shops);
        let shopsRating;
        Fireflower.getProductRating()
          .then(response => {
            shopsRating = response?.data?.data[0];
            let newShops = shops.map(item => {
              let newRating = [];
              shopsRating.forEach(r => {
                if (item?.id === r?.product_id) newRating.push(r);
              });
              if (newRating?.length) {
                return {...item, rating: [...item.rating, ...newRating]};
              }
              return item;
            });
            setShopsList(newShops);
          })
          .catch((err) => message.error(err.message));
        setLoading(false);
      })
    .catch((err) => {
      message.error(err);
      setLoading(false);
    });
  }, []);

  const getAverageRating = (shop) => {
    let count = 0;
    let sum = 0;
    shop?.rating.forEach(item => {
      count++;
      sum += item.rate;
    });
    return Math.floor(sum/count);
  };

  const getRatingCount = (shop) => {
    let count = 0;

    shop?.rating.forEach(() => count++);
    return count;
  };

  const handleAddFeedback = (id, rate, comment) => {
    Fireflower.postProductRating({
      product_id: id,
      Rate: rate,
      Comment: comment
    })
      .then(() => {
        setShopOpen(false);
        message.success('Отзыв оставлен!');
      })
      .catch((error) => {
        message.error(error);
      });
    Fireflower.getShops()
      .then((resp) => {
        let shops = resp?.data?.data[0].map(item => (
          {...item,
            rating: [],
          }));
        setShopsList(shops);
        let shopsRating;
        Fireflower.getProductRating()
          .then(response => {
            shopsRating = response?.data?.data[0];
            let newShops = shops.map(item => {
              let newRating = [];
              shopsRating.forEach(r => {
                if (item?.id === r?.product_id) newRating.push(r);
              });
              if (newRating?.length) {
                return {...item, rating: [...item.rating, ...newRating]};
              }
              return item;
            });
            setShopsList(newShops);
          })
          .catch((err) => message.error(err.message));
        setLoading(false);
      })
      .catch((err) => {
        message.error(err);
        setLoading(false);
      });
  };

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
        <ShopModal
          isShopOpen={isShopOpen?.isOpen}
          setShopOpen={setShopOpen}
          onSuccess={handleAddFeedback}
          getAverageRating={getAverageRating}
          getRatingCount={getRatingCount}
          shop={isShopOpen?.product}
        />
      </div>
    </div>
  );
};
