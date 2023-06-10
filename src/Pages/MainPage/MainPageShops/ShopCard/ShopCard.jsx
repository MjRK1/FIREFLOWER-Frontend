import React from "react";
import { StarFilled } from '@ant-design/icons';
import SHOP_IMG from '../../../../assets/images/shop.png';


export const ShopCard = ({shop}) => {
  return (
    <div
      className="shop-card"
      key={shop?.id}
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
          <div className="rate__value">{7}</div>
          <div className="rate__count">{100} отзывов</div>
        </div>
      </div>
    </div>
  );
};
