import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './App';
import configureStore from './store';
/* eslint-disable-line */
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

const middleware = routerMiddleware(history);

const store = configureStore(middleware);

render(
  <Provider store={store}>
    <App history={history}/>
  </Provider>,
  document.getElementById('root'),
);
