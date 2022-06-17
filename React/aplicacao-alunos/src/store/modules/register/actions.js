import * as types from '../types';

export function registerRequest(payload) {
  return {
    type: types.REGISTER_REQUEST,
    payload,
  };
}
export function registerFailure(payload) {
  return {
    type: types.REGISTER_FAILURE,
    payload,
  };
}
export function registerSuccess() {
  return {
    type: types.REGISTER_SUCCESS,
  };
}
