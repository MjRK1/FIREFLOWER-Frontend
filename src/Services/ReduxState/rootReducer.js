import FLOWER from "../../assets/images/flower.png";

const initialState = {
  userInfo: {
    id: null,
    name: '',
    phone: '',
    adress: '',
    photo: null,
  },
  cartProducts: []
};

const SET_USER_INFO = 'SET_USER_INFO';
const SET_PRODUCTS_CART = 'SET_PRODUCTS_CART';

// eslint-disable-next-line default-param-last
export const rootReducer = (state = initialState, action) => {
  switch(action?.type) {
    case SET_USER_INFO:
      return {...state, userInfo: action.userInfo};
    case SET_PRODUCTS_CART:
      return {...state, cartProducts: action.cartProducts};
    default:
      return state;
  }
};

