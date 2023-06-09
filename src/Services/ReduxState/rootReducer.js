const initialState = {
  userInfo: {
    id: null,
    name: '',
    phone: '',
    adress: '',
    photo: null,
  },
  productsCart: []
};

const SET_USER_INFO = 'SET_USER_INFO';
const SET_PRODUCTS_CART = 'SET_PRODUCTS_CART';

export const rootReducer = (action, state = initialState) => {
  // eslint-disable-next-line default-case
  switch(action?.type) {
    case SET_USER_INFO:
      return {...state, userInfo: action.userInfo};
    case SET_PRODUCTS_CART:
      return {...state, productsCart: action.productsCart};
    default:
      return state;
  }
};

