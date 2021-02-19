import * as Api from '../../api';
import * as ActionTypes from './actionTypes';

const fetchBooksRequest = () => ({
  type: ActionTypes.FETCH_BOOKS_REQUEST,
});

const fetchBooksSuccess = (books) => ({
  type: ActionTypes.FETCH_BOOKS_SUCCESS,
  payload: books,
});

const fetchBooksFailed = (errorMessage) => ({
  type: ActionTypes.FETCH_BOOKS_FAILED,
  payload: errorMessage,
});

export const fetchCartBooks = () => (dispatch) => {
  dispatch(fetchBooksRequest());
  Api.fetchCartBooks()
    .then((res) => dispatch(fetchBooksSuccess(res)))
    .catch(({ message }) => dispatch(fetchBooksFailed(message)));
};

export const addBookToCart = (book) => (dispatch) => {
  Api.fetchAddBookToCart(book).then((res) =>
    dispatch({ type: ActionTypes.ADD_BOOK_TO_CART, payload: res })
  );
};

export const removeBookFromCart = (book) => (dispatch) => {
  Api.fetchRemoveBookFromCart(book).then((res) =>
    dispatch({ type: ActionTypes.REMOVE_BOOK_FROM_CART, payload: res })
  );
};
