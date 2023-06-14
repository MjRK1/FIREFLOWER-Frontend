import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { Drawer } from "../../commonComponents/drawer";
import { Button } from "../../commonComponents/button";
import { Fireflower } from "../../Services/Fireflower/Fireflower";
import FIREFLOWER from '../../assets/images/flower.png';


export const Cart = () => {
  let cartProducts = useSelector(state => state.cartProducts);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (!cartProducts || !cartProducts?.length) {
      Fireflower.setProductsCart(JSON.parse(localStorage.getItem('cart')));
    }
  }, []);

  const navigate = useNavigate();

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
      localStorage.setItem("cart", JSON.stringify(newCartProducts));
    } else {
      newCartProducts = cartProducts.map(item => {
        if (item?.id === id) {
          return {...item, count: item.count + 1};
        }
        return item;
      });
      Fireflower.setProductsCart([...newCartProducts]);
      localStorage.setItem("cart", JSON.stringify(newCartProducts));
    }
  };

  const getCartSummary = () => {
    let sum = 0;
    if (cartProducts?.length) cartProducts?.forEach(item => { sum += item.price * item?.count; });
    return sum;
  };

  const handleClick = () => {
    setOpen(false);
    navigate('/order');
  };

  const renderCartInfo = () => {
    if (!cartProducts?.length) return (
      <div className="cart-drawer-container__title">
        Корзина пуста
      </div>
    );
    return (
      <div className="cart-drawer-container">
        <div className="cart-drawer-container__title">
          Ваш заказ
        </div>
        <div className="cart-drawer-container__delivery-date">
          <span className="delivery-date__field">Время доставки: </span>
          <span className="delivery-date__value">завтра 11:55 - 12:25</span>
        </div>
        <Button
          theme='black'
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'no-wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 20
          }}
          onClick={() => handleClick()}
        >
          <div className="make-order-button__title">
            Оформление заказа
          </div>
          <div className="make-order-button__cost">
            {getCartSummary()} ₽
          </div>
        </Button>
        <div className="cart-drawer-container__delivery-cost">
          <div className="delivery-cost__title">
            Стоимость доставки
          </div>
          <div className="delivery-cost__value">
            959 ₽
          </div>
        </div>
        <div className="cart-drawer-container__products-list">
          {cartProducts?.map(item => (
            <div key={item?.id} className="products-list__products-item">
              <img src={FIREFLOWER} alt='Розы' className='products-item__product-image' />
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
      </div>
    );
  };


  return (
    <div className="cart-wrapper">
      <div
        className="cart-wrapper__cart-button"
        onClick={() => setOpen(true)}
      >
        <span className="cart-button__icon">
          <ShoppingCartOutlined className='icon-cart' />
        </span>
        <span className='cart-button__products-count'>{getCartProductsCount()}</span>
      </div>
      <Drawer
        open={isOpen}
        onClose={() => setOpen(false)}
        width={380}
      >
        {renderCartInfo()}
      </Drawer>
    </div>
  );
};
