/* eslint-disable */
import axios from 'axios';
import { store } from '../ReduxState';

const FIREFLOWER = 'localhost:5000/';


export class Wfm {
  static setUserInfo = (userInfo) => {
    store.dispatch({type: 'SET_USER_INFO', userInfo});
  };

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

  static getProducts(page) {
    //return axios.get(`${FIREFLOWER}get_products/?count=5&page=${page}`)
  }

  static auth(email, password) {
    return axios.post(`${FIREFLOWER}auth/`, {
      email: email,
      password: password,
      withCredentials: true
    })
  }

  static register(email, password, phone) {
    return axios.post(`${FIREFLOWER}register/`, {
      email: email,
      password: password,
      phone: phone
    })
  }

  static userMe() {
    return axios.get(`${FIREFLOWER}user_me`, {withCredentials: true})
  }

  static userCart(params) {
    return axios.post(`${FIREFLOWER}user_cart/`, {
      ...params
    })
  }

  static postCard(postcard_prompt) {
    return axios.get(`${FIREFLOWER}post_card/`, {
      postcard_prompt: [...postcard_prompt]
    })
  }

  static rateProduct(product_id, rate, comment) {
    return axios.post(`${FIREFLOWER}rate_product/`, {
      product_id: product_id,
      rate: rate,
      comment: comment
    })
  }

  static rateShop(shop_id, rate, comment) {
    return axios.post(`${FIREFLOWER}rate_shop/`, {
      product_id: shop_id,
      rate: rate,
      comment: comment
    })
  }

  static setMailing(id) {
    return axios.post(`${FIREFLOWER}mailing/`, {
      user_id: id
    })
  }

  static getShops() {
    return axios.get(`${FIREFLOWER}get_shops/`)
  }
}
