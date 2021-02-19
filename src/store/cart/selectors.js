import { createSelector } from 'reselect';

export const selectCartState = (state) => state.cart;
export const selectCartBooks = (state) => selectCartState(state).items;

export const selectTotalSum = createSelector(selectCartBooks, (books) =>
  books.length
    ? books
        .map((book) => book.price)
        .reduce((totalSum, currentPrice) => totalSum + currentPrice)
    : undefined
);

export const selectCartBooksCount = createSelector(
  selectCartBooks,
  (books) => books.length
);
