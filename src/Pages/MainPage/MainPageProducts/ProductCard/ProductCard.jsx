import React, { useEffect, useState } from "react";
import { motion } from 'framer-motion';
import { StarFilled } from '@ant-design/icons';
import FIREFLOWER from '../../../../assets/images/flower.png';
import { Button } from "../../../../commonComponents/button";
import { Fireflower } from "../../../../Services/Fireflower/Fireflower";


export const ProductCard = ({product, onAddToCart, rate, rateCount, setProductOpen}) => {


  return (
    <motion.div
      className="product-card"
      key={product?.id}
      whileTap={{scale: 0.98, transition: {duration: 0.2}}}
      onClick={() => setProductOpen({product: product, isOpen: true})}
    >
      <div className="product-card__image">
        <img src={FIREFLOWER} alt='цветок' />
      </div>
      <div className="product-card__title">
        {product?.name}
      </div>
      <div className="product-card__pay-button-wrapper">
        <div className="pay-button-wrapper__delivery-time">
          <span>Завтра</span>
          <span>09:00 - 23:00</span>
        </div>
        <div className="pay-button-wrapper__button">
          <Button
            theme='secondary'
            style={{minWidth: 70, width: 'auto', height: 30}}
            onClick={(e) => onAddToCart(product, e)}
          >
            {product?.price}  ₽
          </Button>
        </div>
      </div>
      <div className="product-card__additional-info">
        <div className="additional-info__rate">
          <StarFilled style={{color: 'var(--color-orange1)', fontSize: 20, marginRight: 5}} />
          <div className="rate__value">{rate ? rate : 'Отзывов нет'}</div>
          {!!rate && (<div className="rate__count">{rateCount} отзывов</div>)}
        </div>
      </div>
    </motion.div>
  );
};
