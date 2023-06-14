import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { nanoid } from 'nanoid';
import { LoadingOutlined } from '@ant-design/icons';
import { ProductCard} from "./ProductCard";
import { Button } from "../../../commonComponents/button";
import { Fireflower } from "../../../Services/Fireflower/Fireflower";
import {ProductModal} from "./ProductModal";
import {message} from "../../../commonComponents/message/message";
import {FIREFLOWER_URL} from "../../../Services/constants";

// const PRODUCTS = Array.from({length: 6}, (_, i) => ({
//   id: i+1,
//   type: 'flower',
//   rating: Math.floor(Math.random() * 10) + 1,
//   rating_count: 50,
//   image: FLOWER,
//   name: 'Букет из 19 ирисов в дизайнерской упаковке',
//   composition: [
//     {
//       id: nanoid(3),
//       comp_name: 'Цветок1',
//       comp_count: '3'
//     },
//     {
//       id: nanoid(3),
//       comp_name: 'Цветок2',
//       comp_count: '3'
//     },
//     {
//       id: nanoid(3),
//       comp_name: 'Цветок3',
//       comp_count: '3'
//     }
//   ],
//   shop_id: `shop_${i+1}`,
//   price: 1959
// }));


export const MainPageProducts = () => {
  const [productsList, setProductsList] = useState([]);
  const [isProductOpen, setProductOpen] = useState({product: null, isOpen: false});
  const [isLoading, setLoading] = useState(false);
  const productsCart = useSelector(state => state?.cartProducts);

  useEffect(() => {
    setLoading(true);
    Fireflower.getProducts()
      .then((resp) => {
        let products = resp?.data?.data[0].map(item => (
          {...item,
            rating: [],
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
          }));
        setProductsList(products);
        let productsRating;
        Fireflower.getProductRating()
          .then(response => {
            productsRating = response?.data?.data[0];
            let newProducts = products.map(item => {
              let newRating = [];
              productsRating.forEach(r => {
                if (item?.id === r?.product_id) newRating.push(r);
              });
              if (newRating?.length) {
                return {...item, rating: [...item.rating, ...newRating]};
              }
              return item;
            });
            setProductsList(newProducts);
          })
          .catch((err) => message.error(err.message));
        setLoading(false);
      })
      .catch((err) => {
        message.error(err);
        // setProductsList(PRODUCTS);
        setLoading(false);
      });
  }, []);

  const handleAddFeedback = (id, rate, comment) => {
    Fireflower.postProductRating({
      product_id: id,
      Rate: rate,
      Comment: comment
    })
      .then(() => {
        setProductOpen(false);
        message.success('Отзыв оставлен!');
      })
      .catch((error) => {
        message.error(error);
      });
    Fireflower.getProducts()
      .then((resp) => {
        let products = resp?.data?.data[0].map(item => (
          {...item,
            rating: [],
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
          }));
        setProductsList(products);
        let productsRating;
        Fireflower.getProductRating()
          .then(response => {
            productsRating = response?.data?.data[0];
            let newProducts = products.map(item => {
              let newRating = [];
              productsRating.forEach(r => {
                if (item?.id === r?.product_id) newRating.push(r);
              });
              if (newRating?.length) {
                return {...item, rating: [...item.rating, ...newRating]};
              }
              return item;
            });
            setProductsList(newProducts);
          })
          .catch((err) => message.error(err.message));
        setLoading(false);
      })
      .catch((err) => {
        message.error(err);
        // setProductsList(PRODUCTS);
        setLoading(false);
      });
  };

  const getAverageRating = (product) => {
    let count = 0;
    let sum = 0;
    product?.rating.forEach(item => {
      count++;
      sum += item.rate;
    });
    return Math.floor(sum/count);
  };

  const getRatingCount = (product) => {
    let count = 0;

    product?.rating.forEach(() => count++);
    return count;
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
    localStorage.setItem("cart", JSON.stringify([...newProductsCart]));
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
        {productsList?.map(item => (
          <ProductCard
            key={item?.id}
            product={item}
            rate={getAverageRating(item)}
            rateCount={getRatingCount(item)}
            onAddToCart={handleAddToCart}
            setProductOpen={setProductOpen}
          />
        ))}
        <ProductModal
          isProductOpen={isProductOpen?.isOpen}
          setProductOpen={setProductOpen}
          onSuccess={handleAddFeedback}
          getAverageRating={getAverageRating}
          getRatingCount={getRatingCount}
          product={isProductOpen?.product}
          onAddToCart={handleAddToCart}
        />
      </div>
    </div>
  );
};
