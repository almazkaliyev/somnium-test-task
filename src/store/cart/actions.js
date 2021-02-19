import * as ActionTypes from './actionTypes';

export const addBookToCart = (book) => ({
  type: ActionTypes.ADD_BOOK_TO_CART,
  payload: book,
});

export const removeBookFromCart = (book) => ({
  type: ActionTypes.REMOVE_BOOK_FROM_CART,
  payload: book,
});
