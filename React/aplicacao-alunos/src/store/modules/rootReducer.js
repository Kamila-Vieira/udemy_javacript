import { combineReducers } from 'redux';

import auth from './auth/reducer';
import register from './register/reducer';
import deleteUser from './deleteUser/reducer';

export default combineReducers({
  auth,
  register,
  deleteUser,
});
