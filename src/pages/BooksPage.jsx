import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import BookList from '../components/BookList';
import { fetchBooks } from '../store/books/actions';
import { selectBooks } from '../store/books/selectors';

export default () => {
  const dispatch = useDispatch();
  const books = useSelector(selectBooks);

  React.useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <section>
      <h3>Books</h3>
      <BookList books={books} />
    </section>
  );
};
