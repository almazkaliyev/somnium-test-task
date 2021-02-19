import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducer';

const composeEnchancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export default createStore(reducer, composeEnchancers(applyMiddleware(thunk)));
