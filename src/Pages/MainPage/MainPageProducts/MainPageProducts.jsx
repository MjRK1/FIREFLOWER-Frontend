import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { nanoid } from 'nanoid';
import FLOWER from '../../../assets/images/flower.png';
import { ProductCard} from "./ProductCard";
import { Button } from "../../../commonComponents/button";
import { Fireflower } from "../../../Services/Fireflower/Fireflower";
import {ProductModal} from "./ProductCard/ProductModal";
import {message} from "../../../commonComponents/message/message";

const PRODUCTS = Array.from({length: 6}, (_, i) => ({
  id: i+1,
  type: 'flower',
  rating: Math.floor(Math.random() * 10) + 1,
  rating_count: 50,
  image: FLOWER,
  name: 'Букет из 19 ирисов в дизайнерской упаковке',
  composition: [
    {
      id: nanoid(3),
      comp_name: 'Цветок1',
      comp_count: '3'
    },
    {
      id: nanoid(3),
      comp_name: 'Цветок2',
      comp_count: '3'
    },
    {
      id: nanoid(3),
      comp_name: 'Цветок3',
      comp_count: '3'
    }
  ],
  shop_id: `shop_${i+1}`,
  price: 1959
}));


export const MainPageProducts = () => {
  const [productsList, setProductsList] = useState([]);
  const [isProductOpen, setProductOpen] = useState({product: null, isOpen: false});
  const [loading, setLoading] = useState(false);
  const productsCart = useSelector(state => state?.productsCart);

  useEffect(() => {
    setLoading(true);
    Fireflower.getProducts()
      .then((resp) => {
        setProductsList(resp?.data);
        setLoading(false);
      })
      .catch((err) => {
        message.error(err);
        setProductsList(PRODUCTS)
        setLoading(false);
      });
  }, []);

  const handleOpenProduct = (product) => {
    setProductOpen({product: product, isOpen: false});
  };

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    let newProductsCart = productsCart ?? [];
    let isProductInCart = false;
    newProductsCart?.forEach((item) => {
      if (item?.id === product?.id) isProductInCart = true;
    });
    if (isProductInCart) {
      newProductsCart = newProductsCart.map((item) => {
        if (item?.id === product?.id) {
          return { ...item, count: item.count + 1 };
        }
        return item;
      });
    } else {
      newProductsCart.push({ ...product, count: 1 });
    }
    Fireflower.setProductsCart([...newProductsCart]);
    localStorage.setItem("cart", JSON.stringify(newProductsCart));
  };


  return (
    <div className="main-page-products">
      <div className="main-page-products__products-list">
        {productsList?.map(item => (
          <ProductCard
            key={item?.id}
            product={item}
            onAddToCart={handleAddToCart}
            setProductOpen={setProductOpen}
          />
        ))}
        <ProductModal
          isProductOpen={isProductOpen?.isOpen}
          setProductOpen={setProductOpen}
          product={isProductOpen?.product}
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
};
