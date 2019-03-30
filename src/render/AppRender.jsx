import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import { withRouter } from 'react-router-dom';

import Navigation from '../containers/LoginContainers/Navigation';

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
  }
});

class AppRender extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div>
          <Navigation />
          <TransitionGroup >
              {this.props.children}
          </TransitionGroup>
        </div>
      </ MuiThemeProvider>
    );
  }
}

export default withRouter(AppRender);