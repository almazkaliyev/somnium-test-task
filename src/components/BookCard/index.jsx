import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import PropTypes from 'prop-types';

const Book = ({ book }) => (
  <Card bg="light" key={book.id}>
    <Card.Img src={book.img} variant="top" />
    <Card.Body className="p-3">
      <Card.Text className="mb-1">{book.title}</Card.Text>
      <Card.Text className="mb-2">
        <strong>{book.price} &#8376;</strong>
      </Card.Text>
      <Button block size="sm" variant="outline-info">
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
};

export default Book;
