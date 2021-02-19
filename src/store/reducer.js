import { combineReducers } from 'redux';

import bookReducer from './books/reducer';
import cartReducer from './cart/reducer';

export default combineReducers({
  books: bookReducer,
  cart: cartReducer,
});
