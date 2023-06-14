/* eslint-disable */
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { store } from '../ReduxState';
import { FIREFLOWER_URL } from '../constants';

export class Fireflower {
  static setUserInfo = (userInfo) => {
    store.dispatch({type: 'SET_USER_INFO', userInfo});
    localStorage.setItem('userMe', JSON.stringify(userInfo));
  };

  static setProductsCart = (cartProducts) => {
    localStorage.setItem("cart", JSON.stringify(cartProducts));
    store.dispatch({type: 'SET_PRODUCTS_CART', cartProducts })
  }

  static getMe() {
    // return axios.get(`${FIREFLOWER}user_me/`, {params})
    const RESPONSE = {
      user: {
        id: 1,
        name: 'Олег',
        phone: '+79625460805',
        adress: 'Москва, ул. Вадковский пер., д. 8',
        photo: null,
      },
      detail: 'Данные пользователя успешно получены'
    };
    return new Promise((resolve) => {
      setTimeout(() => resolve(RESPONSE), 1000);
    });
  }

  static getProducts() {
    return axios.get(`${FIREFLOWER_URL}GetAllProduct`)
  }
  static getProductRating() {
    return axios.get(`${FIREFLOWER_URL}GetAllProductRating`)
  }
  static postProductRating(params) {
    return axios.post(`${FIREFLOWER_URL}AddProductRating`, {
      product_id: params?.id,
      Rate: params?.rate,
      Comment: params?.comment
    })
  }
  static auth(email, password) {
    return axios.post(`${FIREFLOWER_URL}Login`, {
      email: email,
      password: password,
      // withCredentials: true
    })
  }

  static register(email, password, phone) {
    return axios.post(`${FIREFLOWER_URL}register/`, {
      email: email,
      password: password,
      // phone: phone
    })
  }


  static postPayment(address, Sum_cost) {
    return axios.post(`${FIREFLOWER_URL}addPayment`, {
      address,
      Sum_cost,
      payment_info: 1,
      deliveryTime: 12,
      UserId: 1,
      Product_id: 1
    })
  }

  static postCard(postcard_prompt) {
    return axios.get(`${FIREFLOWER_URL}post_card/`, {
      postcard_prompt: [...postcard_prompt]
    })
  }

  static getShops() {
    return axios.get(`${FIREFLOWER_URL}GetAllShop`)
  }

  static getShopsRating() {
    return axios.get(`${FIREFLOWER_URL}GetRatingShop`)
  }

  static postShopRating(shop_id, rate, comment) {
    return axios.post(`${FIREFLOWER_URL}AddRatingShop`, {
      product_id: shop_id,
      rate: rate,
      comment: comment
    })
  }

  static setMailing(id) {
    return axios.post(`${FIREFLOWER_URL}mailing/`, {
      user_id: id
    })
  }
}
