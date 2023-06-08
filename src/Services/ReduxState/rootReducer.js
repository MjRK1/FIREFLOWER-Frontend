const initialState = {
  userInfo: {
    id: null,
    name: '',
    phone: '',
    adress: '',
    photo: null,
  },
};

const SET_USER_INFO = 'SET_USER_INFO';

export const rootReducer = (action, state = initialState) => {
  // eslint-disable-next-line default-case
  switch(action?.type) {
    case SET_USER_INFO:
      return {...state, userInfo: action.userInfo};
  }
};

