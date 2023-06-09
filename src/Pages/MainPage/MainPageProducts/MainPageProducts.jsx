import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { nanoid } from 'nanoid';
import FLOWER from '../../../assets/images/flower.png';
import { ProductCard} from "./ProductCard";
import { Button } from "../../../commonComponents/button";
import {Fireflower} from "../../../Services/Fireflower/Fireflower";

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
  const [productsList, setProductsList] = useState(PRODUCTS);

  let productsCart = useSelector(state => state?.productsCart);


  const handleAddToCart = (product) => {
    let newProductsCart = productsCart ?? [];
    let existingProduct = false;
    if (newProductsCart) existingProduct = productsCart?.find(item => item?.id === product?.id);

    if (existingProduct) {
      newProductsCart = productsCart.map(item => {
        if (item?.id === product?.id) return (
          {...item, count: item.count + 1}
        );
        return item;
      });
    } else {
      newProductsCart?.push({...product, count: 1});
    }
    console.log(newProductsCart);
    // if (newProductsCart?.length) {
    //   newProductsCart = newProductsCart.map(item => {
    //     if (item?.id === product?.id) return {
    //       ...item,
    //       count: item.count + 1
    //     };
    //     return item;
    //   });
    // } else {
    //   newProductsCart = [];
    //   newProductsCart.push({...product, count: 1});
    // }
    Fireflower.setProductsCart([...newProductsCart]);
  };


  return (
    <div className="main-page-products">
      <div className="main-page-products__products-list">
        {productsList?.map(item => (
          <ProductCard key={item?.id} product={item} onAddToCart={handleAddToCart} />
        ))}
        <Button theme='black' style={{width: 600, marginRight: 30}}>
          Показать еще
        </Button>
      </div>
    </div>
  );
};
