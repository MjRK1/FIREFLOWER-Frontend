/* eslint-disable */
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { store } from '../ReduxState';
import { FIREFLOWER_URL } from '../constants';

export class Fireflower {
  static setUserInfo = (userInfo) => {
    store.dispatch({type: 'SET_USER_INFO', userInfo});
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
    return axios.get(`${FIREFLOWER_URL}GetAllProductRaiting`)
  }
  static postProductRating(params) {
    return axios
      .post(`${FIREFLOWER_URL}AddProductRaiting?Rate=${params?.Rate}&Comment=${params.Comment}&product_id=${params.product_id}`)
  }
  static auth(email, password) {
    return axios.post(`${FIREFLOWER_URL}auth/`, {
      email: email,
      password: password,
      withCredentials: true
    })
  }

  static register(email, password, phone) {
    return axios.post(`${FIREFLOWER_URL}register/`, {
      email: email,
      password: password,
      phone: phone
    })
  }


  static payment(params) {
    return axios.post(`${FIREFLOWER_URL}payment`, {
      ...params
    })
  }

  static postCard(postcard_prompt) {
    return axios.get(`${FIREFLOWER_URL}post_card/`, {
      postcard_prompt: [...postcard_prompt]
    })
  }

  static rateProduct(product_id, rate, comment) {
    return axios.post(`${FIREFLOWER_URL}rate_product/`, {
      product_id: product_id,
      rate: rate,
      comment: comment
    })
  }

  static getShops() {
    return axios.get(`${FIREFLOWER_URL}GetAllShop`)
  }

  static getShopsRating() {
    return axios.get(`${FIREFLOWER_URL}GetRatingShop`)
  }

  static rateShop(shop_id, rate, comment) {
    return axios.post(`${FIREFLOWER_URL}rate_shop/`, {
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
