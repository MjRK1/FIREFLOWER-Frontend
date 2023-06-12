import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { InputText } from "../../commonComponents/input/inputText";
import { DatePicker } from "../../commonComponents/datepicker";
import { Button } from "../../commonComponents/button";
import { Fireflower } from "../../Services/Fireflower/Fireflower";
import { message } from "../../commonComponents/message/message";

export const OrderPage = () => {
  const [date, setDate] = useState('');
  const [adress, setAdress] = useState('');
  const cartProducts = useSelector(state => state?.cartProducts);


  // TODO: Продумать редирект на главную страницу при удалении всех товаров или вывести сообщение в "товары к оплате", что товаров нет
  useEffect(() => {
    if (!cartProducts || !cartProducts?.length) {
      Fireflower.setProductsCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, []);

  const getCartProductsCount = () => {
    let count = 0;
    if (cartProducts?.length) cartProducts?.forEach(item => { count += item.count; });
    return count;
  };

  const handleChangeCount = (type, id, count) => {
    let newCartProducts;
    if (type === 'minus') {
      if (count > 1) {
        newCartProducts = cartProducts.map(item => {
          if (item?.id === id) {
            return {...item, count: item.count - 1};
          }
          return item;
        });
      } else {
        newCartProducts = cartProducts.filter(item => {
          return item?.id !== id;
        });
      }
      newCartProducts = newCartProducts.filter(item => item !== undefined);
      Fireflower.setProductsCart([...newCartProducts]);
    } else {
      newCartProducts = cartProducts.map(item => {
        if (item?.id === id) {
          return {...item, count: item.count + 1};
        }
        return item;
      });
      Fireflower.setProductsCart([...newCartProducts]);
    }
  };

  const getCartSummary = () => {
    let sum = 0;
    if (cartProducts?.length) cartProducts?.forEach(item => { sum += item.price * item?.count; });
    return sum;
  };

  const handlePayment = () => {
    Fireflower.payment({
      id: 1,
      adress: adress,
      sum_cost: getCartSummary(),
      payment_info: 0,
      deliveryTime: date,
    }).then((resp) => {
      message.success(resp.details);
    })
      .catch((err) => message.error('Сервак опять сдох!'));
  };

  return (
    <div className="order-page">
      <div className="order-page__order-details">
        <div className="order-details__title">
          Детали доставки
        </div>
        <div className="order-details__order-adress">
          <div className="order-adress__title">
            Адрес доставки
          </div>
          <InputText style={{width: 300}} value={adress} onChange={(e) => setAdress(e.target.value)} />
        </div>
        <div className="order-details__order-time">
          <div className="order-time__title">Дата доставки</div>
          <DatePicker onChange={(date) => setDate(date)} />
        </div>
        <div className="order-details__order-additional">
          <div className="order-additional__title">
            Отмена заказов
          </div>
          <div className="order-additional__text">
            На вашей карте будут заморожены
            и спишутся только после доставки.
            Вы можете отменить заказ в любое время,
            пока курьер не назначен на доставку,
            ― вам вернутся 100% стоимости.
          </div>
        </div>
        <Button theme='black' style={{width: 400}} onClick={() => handlePayment()}>Завершить заказ</Button>
      </div>
      <div className="order-page__order-cart">
        <div className="order-cart__title">
          Товары к оплате
        </div>
        <div className="order-cart__cart-products-list">
          {cartProducts?.map(item => (
            <div key={item?.id} className="products-list__products-item">
              <img src={item?.image} alt='Розы' className='products-item__product-image' />
              <div className="products-item__product-info">
                <div className="product-info__product-title">
                  {item?.name}
                </div>
                <div className="product-info__payment-info">
                  <div className="payment-info__product-count">
                    <motion.div
                      className="product-count__button-minus"
                      whileTap={{scale: 1.2, transition: {duration: 0.2}}}
                      onClick={() => handleChangeCount('minus', item?.id, item?.count)}
                    >
                      <div className="button-minus--minus" />
                    </motion.div>
                    <div className="product-count__count">{item?.count}</div>
                    <motion.div
                      className="product-count__button-plus"
                      whileTap={{scale: 1.2, transition: {duration: 0.2}}}
                      onClick={() => handleChangeCount('plus', item?.id, item?.count)}
                    >
                      <div className="button-plus--plus" />
                      <div className="button-plus--line" />
                    </motion.div>
                  </div>
                  <div className="payment-info__cost">
                    {item.price * item.count} ₽
                  </div>
                </div>
              </div>
            </div>
            )
          )}
        </div>
        <div className="order-cart__summary">
          Итого к оплате: {getCartSummary()} ₽
        </div>
      </div>
    </div>
  );
};
