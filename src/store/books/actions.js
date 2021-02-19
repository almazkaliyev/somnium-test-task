/* eslint-disable import/prefer-default-export */
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

export const fetchBooks = () => (dispatch) => {
  dispatch(fetchBooksRequest());
  Api.fetchBooks()
    .then((res) => dispatch(fetchBooksSuccess(res)))
    .catch(({ message }) => dispatch(fetchBooksFailed(message)));
};
