export const selectBooksState = (state) => state.books;
export const selectBooks = (state) => selectBooksState(state).items;
export const selectBooksIsLoading = (state) => selectBooks(state).isLoading;
