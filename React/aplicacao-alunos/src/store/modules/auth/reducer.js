import * as types from '../types';

const initialState = {
  isLoggedIn: false,
  token: null,
  user: null,
  isLoading: false,
};

// eslint-disable-next-line default-param-last
export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_SUCCESS: {
      console.log('Sucesso!');
      return state;
    }
    case types.LOGIN_FAILURE: {
      console.log('Deu um erro =(');
      return state;
    }
    case types.LOGIN_REQUEST: {
      console.log('Estou fazendo a requisição');
      return state;
    }
    default:
      return state;
  }
}
