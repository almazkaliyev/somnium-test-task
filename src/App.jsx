import Container from 'react-bootstrap/Container';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import BooksPage from './pages/BooksPage';
import CartPage from './pages/CartPage';

export default () => (
  <Container className="mt-5 pt-4 px-sm-0">
    <Header />
    <main>
      <Switch>
        <Route exact path="/">
          <BooksPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
      </Switch>
    </main>
  </Container>
);
