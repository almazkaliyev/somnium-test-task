import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useDispatch, useSelector } from 'react-redux';

import { removeBookFromCart } from '../store/cart/actions';
import { selectCartBooks, selectTotalSum } from '../store/cart/selectors';

export default () => {
  const dispatch = useDispatch();
  const books = useSelector(selectCartBooks);
  const total = useSelector(selectTotalSum);

  return (
    <section>
      <h3>Cart</h3>
      {books.length ? (
        <>
          <Col className="mb-4" md={7}>
            {books.map((book) => (
              <Row
                className="d-flex align-items-center justify-content-evenly mb-1"
                key={book.id}
              >
                <h6 className="mb-0 flex-grow-1">{book.title}</h6>
                <strong className="mr-3">{book.price} &#8376;</strong>
                <Button
                  onClick={() => dispatch(removeBookFromCart(book))}
                  size="sm"
                  variant="light"
                >
                  &#10799;
                </Button>
              </Row>
            ))}
          </Col>
          <Col md={7}>
            <Row className="justify-content-end">
              <span className="flex-grow-1">Total:</span>
              <strong>{total} &#8376;</strong>
            </Row>
          </Col>
        </>
      ) : (
        <h6 className="text-muted">Is empty</h6>
      )}
    </section>
  );
};
