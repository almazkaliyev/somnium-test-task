import Badge from 'react-bootstrap/Badge';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';

export default () => (
  <Navbar
    as="header"
    bg="dark"
    className="justify-content-between"
    fixed="top"
    variant="dark"
  >
    <Container>
      <Navbar.Brand>Bookstrap</Navbar.Brand>
      <Nav as="nav">
        <Nav.Item className="mr-2">
          <Nav.Link as={NavLink} exact to="/">
            Books
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            as={NavLink}
            className="d-flex align-items-center"
            to="/cart"
          >
            Cart
            <Badge className="ml-2" pill variant="info">
              2
            </Badge>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  </Navbar>
);
