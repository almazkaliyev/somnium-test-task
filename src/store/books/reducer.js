/* eslint-disable default-case */
/* eslint-disable no-param-reassign */
import produce from 'immer';

import * as ActionTypes from './actionTypes';

const initialState = {
  errorMessage: '',
  isLoading: false,
  items: [],
};

export default produce((draft, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_BOOKS_REQUEST:
      draft.isLoading = true;
      break;

    case ActionTypes.FETCH_BOOKS_SUCCESS:
      draft.isLoading = false;
      draft.items = action.payload.map((book) => ({
        ...book,
        price: parseFloat(book.price),
      }));
      draft.errorMessage = '';
      break;

    case ActionTypes.FETCH_BOOKS_FAILED:
      draft.isLoading = false;
      draft.items = [];
      draft.errorMessage = action.payload;
      break;
  }
}, initialState);
