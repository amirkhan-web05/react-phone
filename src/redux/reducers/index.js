import { combineReducers } from 'redux';
import cart from './cart';
import phone from './phone';

const rootReducers = combineReducers({
  phone,
  cart,
});

export default rootReducers;
