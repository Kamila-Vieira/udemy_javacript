import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './actions';
import * as authActions from '../auth/actions';
import * as types from '../types';
import axios from '../../../services/axios';

function* registerRequest({ payload }) {
  const { nome, email, password, id, navigate, dispatchLogout } = payload;
  try {
    if (id) {
      yield call(axios.put, '/users', {
        nome,
        email,
        password: password || undefined,
      });

      if (dispatchLogout) {
        toast.success(
          'Dados alterados com sucesso! Você precisa fazer login novamente'
        );
        yield put(authActions.loginFailure());
        navigate('/login');
      } else {
        toast.success('Dados alterados com sucesso!');
        navigate('/');
      }
    } else {
      yield call(axios.post, '/users', {
        nome,
        email,
        password,
      });

      toast.success('Cadastro realizado com sucesso!');
      navigate('/login');
    }
    yield put(actions.registerSuccess());
  } catch (error) {
    const errors = get(error, 'response.data.errors', []);
    const status = get(error, 'response.status', 0);

    if (status === 401) {
      toast.error('Você precisa fazer login novamente');
      yield put(authActions.loginFailure());
      navigate('/login');
    } else {
      if (errors.length > 0) {
        errors.map((err) => toast.error(err));
      } else {
        toast.error('Erro desconhecido');
      }

      yield put(actions.registerFailure());
    }
  }
}

export default all([takeLatest(types.REGISTER_REQUEST, registerRequest)]);
