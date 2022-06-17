import * as types from '../types';
import axios from '../../../services/axios';

const initialState = {
  isLoggedIn: false,
  token: null,
  user: null,
  isLoading: false,
};

// eslint-disable-next-line default-param-last
export default function (state = initialState, action) {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      return { ...state, isLoading: true };
    }
    case types.LOGIN_SUCCESS: {
      const newState = {
        ...state,
        isLoggedIn: true,
        token: action.payload.token,
        user: action.payload.user,
        isLoading: false,
      };
      return newState;
    }
    case types.LOGIN_FAILURE: {
      delete axios.defaults.headers.Authorization;
      return { ...initialState };
    }
    default:
      return state;
  }
}
