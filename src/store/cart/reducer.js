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
      draft.items = action.payload;
      draft.errorMessage = '';
      break;

    case ActionTypes.FETCH_BOOKS_FAILED:
      draft.isLoading = false;
      draft.items = [];
      draft.errorMessage = action.payload;
      break;

    case ActionTypes.ADD_BOOK_TO_CART: {
      const index = draft.items.findIndex(
        (book) => book.id === action.payload.id
      );
      if (index === -1) {
        draft.items.push(action.payload);
      } // skip re-adding
      break;
    }

    case ActionTypes.REMOVE_BOOK_FROM_CART: {
      const index = draft.items.findIndex(
        (book) => book.id === action.payload.id
      );
      if (index !== -1) {
        draft.items.splice(index, 1);
      }
      break;
    }
  }
}, initialState);
