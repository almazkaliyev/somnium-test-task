/* eslint-disable prettier/prettier */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import debounce from 'lodash/debounce';
import PropTypes from 'prop-types';

const Book = ({ book, onClick }) => (
  <Card bg="light" key={book.id}>
    <Card.Img src={book.img} variant="top" />
    <Card.Body className="p-3">
      <Card.Text className="mb-1">{book.title}</Card.Text>
      <Card.Text className="mb-2">
        <strong>{book.price} &#8376;</strong>
      </Card.Text>
      <Button
        block
        onClick={debounce(onClick, 150)}
        size="sm"
        variant="outline-info"
      >
        Add to cart
      </Button>
    </Card.Body>
  </Card>
);

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Book;
