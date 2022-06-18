import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './actions';
import * as authActions from '../auth/actions';
import * as types from '../types';
import axios from '../../../services/axios';

function* deleteRequest({ payload }) {
  const { navigate } = payload;

  try {
    yield call(axios.delete, '/users');
    yield put(actions.deleteSuccess());

    yield put(authActions.loginFailure());
    toast.success('Usuário deletado com sucesso!');
    navigate('/login');
  } catch (error) {
    const errors = get(error, 'response.data.errors', []);

    if (errors.length > 0) {
      errors.map((err) => toast.error(err));
    } else {
      toast.error('Erro desconhecido');
    }

    yield put(actions.deleteFailure());
  }
}

export default all([takeLatest(types.DELETE_USER_REQUEST, deleteRequest)]);
