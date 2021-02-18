import BookList from '../components/BookList';
import data from '../data.json';

export default () => (
  <section>
    <h3>Books</h3>
    <BookList books={data} />
  </section>
);
