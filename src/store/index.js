import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerReducer } from 'react-router-redux'
import persistState from 'redux-localstorage';
import thunk from 'redux-thunk';
import reducers from '../reducers';

/* Percistencia del estado user en el localstorage de redux */
const enhancer = compose(
  persistState('user')
)

const rootReducer = combineReducers(
  {
    ...reducers,
    router: routerReducer
  }
)

export default function configureStore(middleware) {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(middleware, thunk)),
    enhancer
  );
}