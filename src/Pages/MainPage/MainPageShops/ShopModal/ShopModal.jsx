import React, { useState } from "react";
import axios from 'axios';
import { StarFilled, CarOutlined } from '@ant-design/icons';
import { Rate } from 'antd';
import { Button } from '../../../../commonComponents/button';
import { message } from "../../../../commonComponents/message/message";
import { Modal } from "../../../../commonComponents/modal";
import { TextArea } from "../../../../commonComponents/input/textarea/textarea";
import { FIREFLOWER_URL } from "../../../../Services/constants";
import FIREFLOWER from '../../../../assets/images/flower.png';


export const ShopModal = (props) => {
  const {
    isProductOpen,
    setProductOpen,
    onClose,
    onSuccess,
    product,
    getRatingCount,
    getAverageRating,
    onAddToCart
  } = props;
  const [commentValue, setCommentValue] = useState('');
  const [rateValue, setRateValue] = useState(0);

  const handleAddToCart = (e) => {
    setRateValue(0);
    setCommentValue('');
    onAddToCart(product, e);
    setProductOpen(false);
  };

  const handleCancel = () => {
    setRateValue(0);
    setCommentValue('');
    setProductOpen(false);
  };

  const handleSuccess = () => {
    onSuccess(product?.id, rateValue, commentValue);
    setRateValue(0);
    setCommentValue('');
    setProductOpen(false);
  };

  return (
    <Modal
      open={isProductOpen}
      width={800}
      onOk={handleSuccess}
      onCancel={handleCancel}
    >
      <div className="product-modal">
        <div className="product-modal__product-info">
          <div className="product-info__product-preview">
            <img src={FIREFLOWER} alt="Цветочки" />
          </div>
          <div className="product-info__product-details">
            <div className="product-details__title">
              {product?.name}
            </div>
            <div className="product-details__rating">
              <StarFilled style={{color: 'var(--color-orange1)', fontSize: 20, marginRight: 5}} />
              <div className="rating__rating-value">
                {getAverageRating(product)}
              </div>
              <div className="rating__rating-count">
                {getRatingCount(product)} оценок товара
              </div>
            </div>
            <div className="product-details__delivery-info">
              <CarOutlined style={{color: 'var(--color-black)', fontSize: 20, marginRight: 10}} />
              <div className="delivery-info__delivery-time">
                Доставка 75-95 мин <br />
                Стоимость доставки 499 ₽
              </div>
            </div>
            <div className="product-details__composition">
              Состав
              {product?.composition.map(item => (
                <div key={item?.id} className="composition__item">
                  <div className="composition__item--name">{item?.comp_name}</div>
                  -
                  <div className="composition__item--count">{item?.comp_count} шт.</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="product-modal__feedback-wrapper">
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
            {product?.rating.map(item => (
              <div className="feedback-list__feedback-wrapper">
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
            {!product?.rating?.length && 'Нет отзывов :('}
          </div>
          <Button
            theme='black'
            width={200}
            style={{position: 'absolute', bottom: 10}}
            onClick={(e) => handleAddToCart(e)}
          >
            В корзину
          </Button>
        </div>
      </div>
    </Modal>
  );
};
