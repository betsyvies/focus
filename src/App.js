import React, { Component } from 'react';

import Router from './containers/Router';
import AppRender from './render/AppRender';

import { Switch } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
/* eslint-disable no-unused-expressions */
class App extends Component {

  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <AppRender>
          <Switch>
            <Router/>
          </Switch>
        </AppRender>
      </ConnectedRouter>
    );
  }
}

export default App;
