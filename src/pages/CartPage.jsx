import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import data from '../data.json';

export default () => (
  <section>
    <h3>Cart</h3>
    <Col className="mb-4" md={7}>
      {data.map((book) => (
        <Row
          className="d-flex align-items-center justify-content-evenly mb-1"
          key={book.id}
        >
          <h6 className="mb-0 flex-grow-1">{book.title}</h6>
          <strong className="mr-3">{book.price} &#8376;</strong>
          <Button size="sm" variant="light">
            &#10799;
          </Button>
        </Row>
      ))}
    </Col>
    <Col md={7}>
      <Row className="justify-content-end">
        <span className="flex-grow-1">Total:</span>
        <strong>3916 &#8376;</strong>
      </Row>
    </Col>
  </section>
);
