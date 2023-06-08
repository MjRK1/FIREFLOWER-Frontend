import React, { useState, useEffect } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ShoppingCartOutlined } from '@ant-design/icons';
import {Drawer} from "../../commonComponents/drawer";


export const Cart = () => {
  const [cartProducts, setCartProducts] = useState([]);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    setCartProducts(localStorage.getItem('cart'));
  }, []);

  return (
    <div className="cart-wrapper">
      <div
        className="cart-wrapper__cart-button"
        onClick={() => setOpen(true)}
      >
        <span className="cart-button__icon">
          <ShoppingCartOutlined className='icon-cart' />
        </span>
        <span className='cart-button__products-count'>{1}</span>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setOpen(false)}
        width={350}
      >
        <div className="cart-drawer-container">
          <div className="cart-drawer-container__title">
            Ваш заказ
          </div>
          <div className="cart-drawer-container__shop-name">
            shop_name
          </div>
          <div className="cart-drawer-container__delivery-date">
            <span className="delivery-date__field">Время доставки: </span>
            <span className="delivery-date__value">завтра 11:55 - 12:25</span>
          </div>
          <div className="cart-drawer-container__make-order-button">
            <div className="make-order-button__title">
              Оформление заказа
            </div>
            <div className="make-order-button__cost">
              9645 ₽
              {/*  TODO*/}
            </div>
          </div>
          <div className="cart-drawer-container__delivery-cost">
            <div className="delivery-cost__title">
              Стоимость доставки
            </div>
            <div className="delivery-cost__value">
              959 ₽
              {/*  TODO*/}
            </div>
          </div>
          {/*  TODO: список товаров в корзине*/}
        </div>
      </Drawer>
    </div>
  );
};
