import { createSelector } from 'reselect';

export const selectBooks = (state) => state.items;
export const selectCartBooks = (state) => state.cart;

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
