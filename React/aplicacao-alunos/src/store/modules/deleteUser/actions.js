import * as types from '../types';

export function deleteRequest(payload) {
  return {
    type: types.DELETE_USER_REQUEST,
    payload,
  };
}
export function deleteFailure() {
  return {
    type: types.DELETE_USER_FAILURE,
  };
}
export function deleteSuccess() {
  return {
    type: types.DELETE_USER_SUCCESS,
  };
}
