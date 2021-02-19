import CardColumns from 'react-bootstrap/CardColumns';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import { addBookToCart } from '../../store/cart/actions';
import BookCard from '../BookCard';
import styles from './index.module.css';

const BookList = ({ books }) => {
  const dispatch = useDispatch();

  return (
    <CardColumns className={styles.list}>
      {books.length ? (
        books.map((book) => (
          <BookCard
            book={book}
            key={book.id}
            onClick={() => dispatch(addBookToCart(book))}
          />
        ))
      ) : (
        <h6 className="text-muted">Is empty</h6>
      )}
    </CardColumns>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default BookList;
