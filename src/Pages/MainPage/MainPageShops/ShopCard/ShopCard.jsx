import React from "react";
import { motion } from 'framer-motion';
import { StarFilled } from '@ant-design/icons';
import SHOP_IMG from '../../../../assets/images/shop.png';


export const ShopCard = ({shop, rate, rateCount, setShopOpen}) => {

  return (
    <motion.div
      className="shop-card"
      key={shop?.id}
      whileTap={{scale: 1.05, transition: {duration: 0.1}}}
      onClick={() => setShopOpen({shop: shop, isOpen: true})}
    >
      <div className="shop-card__image">
        <img src={SHOP_IMG} alt='цветок' />
      </div>
      <div className="shop-card__title">
        {shop?.name}
      </div>
      <div className="shop-card__additional-info">
        <div className="shop-additional-info__rate">
          <StarFilled style={{color: 'var(--color-orange1)', fontSize: 20, marginRight: 5}} />
          <div className="rate__value">{rate ? rate : 'Отзывов нет'}</div>
          {!!rate && (<div className="rate__count">{rateCount} отзывов</div>)}
        </div>
      </div>
    </motion.div>
  );
};
