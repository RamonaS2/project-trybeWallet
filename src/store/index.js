import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReduce from '../reducers/index';

const store = createStore(
  rootReduce,
  composeWithDevTools(
    applyMiddleware(thunk),
  ),
);

export default store;
