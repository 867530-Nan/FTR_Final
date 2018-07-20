import { combineReducers } from 'redux';
import user from './user';
import address from './address'

const rootReducer = combineReducers({
  user,
  address
});

export default rootReducer;
