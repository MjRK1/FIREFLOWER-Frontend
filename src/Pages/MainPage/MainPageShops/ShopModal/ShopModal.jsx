import React, { useState } from "react";
import axios from 'axios';
import { StarFilled, CarOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
import { Button } from '../../../../commonComponents/button';
import { message } from "../../../../commonComponents/message/message";
import { Modal } from "../../../../commonComponents/modal";
import { TextArea } from "../../../../commonComponents/input/textarea/textarea";
import { FIREFLOWER_URL } from "../../../../Services/constants";
import SHOP_IMG from '../../../../assets/images/shop.png';


export const ShopModal = (props) => {
  const {
    isShopOpen,
    setShopOpen,
    onSuccess,
    shop,
    getRatingCount,
    getAverageRating,
  } = props;
  const [commentValue, setCommentValue] = useState('');
  const [rateValue, setRateValue] = useState(0);

  const handleCancel = () => {
    setRateValue(0);
    setCommentValue('');
    setShopOpen(false);
  };

  const handleSuccess = () => {
    onSuccess(shop?.id, rateValue, commentValue);
    setRateValue(0);
    setCommentValue('');
    setShopOpen(false);
  };

  return (
    <Modal
      open={isShopOpen}
      width={800}
      onOk={handleSuccess}
      onCancel={handleCancel}
    >
      <div className="shop-modal">
        <div className="shop-modal__shop-info">
          <div className="shop-info__shop-preview">
            <img src={SHOP_IMG} alt="Магазин" />
          </div>
          <div className="shop-info__shop-details">
            <div className="shop-details__title">
              {shop?.name}
            </div>
            <div className="shop-details__rating">
              <StarFilled style={{color: 'var(--color-orange1)', fontSize: 20, marginRight: 5}} />
              <div className="rating__rating-value">
                {getAverageRating(shop) ? getAverageRating(shop) : ''}
              </div>
              <div className="rating__rating-count">
                {getRatingCount(shop) ? getRatingCount(shop) : 'Нет'} оценок магазина
              </div>
            </div>
          </div>
        </div>
        <div className="shop-modal__feedback-wrapper">
          <div className="feedback-wrapper__title">
            Отправьте флористу отзыв о товаре
          </div>
          <div className="feedback-wrapper__feedback-input">
            <div className="feedback-input__rate-input">
              <Rate
                defaultValue={0}
                character={<StarFilled />}
                style={{color: '#FF7A2F', marginBottom: 15}}
                value={rateValue}
                onChange={(value) => setRateValue(value)}
              />
            </div>
            <div className="feedback-input__textarea">
              <TextArea
                style={{height: 100}}
                value={commentValue}
                placeholder='Напишите отзыв о товаре'
                onChange={(e) => setCommentValue(e.target.value)}
              />
            </div>
          </div>
          <div className="feedback-wrapper__feedback-list">
            <div className="feedback-list__title">Отзывы:</div>
            {shop?.rating.map(item => (
              <div key={`shop-feedback_${item?.id}`} className="feedback-list__feedback-wrapper">
                <div className="feedback-wrapper__feedback-sender">
                  <div className="feedback-sender__avatar">O</div>
                  <div className="feedback-sender__name">Отправитель</div>
                </div>
                <div className="feedback-wrapper__person-rate">
                  <StarFilled style={{color: 'var(--color-orange1)', fontSize: 20, marginRight: 5}} />
                  <span className="person-rate__value">{item?.rate}</span>
                </div>
                <div className="feedback-wrapper__comment-body">
                  <div className="comment-body__title">Отзыв:</div>
                  <div className="comment-body__value">{item?.comment}</div>
                </div>
              </div>
            ))}
            {!shop?.rating?.length && 'Нет отзывов :('}
          </div>
        </div>
      </div>
    </Modal>
  );
};
