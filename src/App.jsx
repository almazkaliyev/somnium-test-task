import React from 'react';
import Container from 'react-bootstrap/Container';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import BooksPage from './pages/BooksPage';
import CartPage from './pages/CartPage';
import { fetchCartBooks } from './store/cart/actions';

export default () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchCartBooks());
  }, []);

  return (
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
};
