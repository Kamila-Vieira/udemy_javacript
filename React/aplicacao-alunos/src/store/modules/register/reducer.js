import * as types from '../types';

const initialState = {
  isLoading: false,
};

// eslint-disable-next-line default-param-last
export default function (state = initialState, action) {
  switch (action.type) {
    case types.REGISTER_REQUEST: {
      return { ...state, isLoading: true };
    }
    case types.REGISTER_SUCCESS: {
      return { ...state, isLoading: false };
    }
    case types.REGISTER_FAILURE: {
      return { ...state, isLoading: false };
    }
    default:
      return state;
  }
}
