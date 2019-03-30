import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Preview from '../../../components/AdmComponents/Preview';

const styles = {
  height: {
    height: '100vh',
  },
};

class PreviewSection extends Component {
  render() {
    const { classes, html, method, idEmail, jwt } = this.props;
    return (
      <div className={classes.height}>
        <Preview html={html} method={method} idEmail={idEmail} jwt={jwt}/>
      </div>
    );
  }
}

PreviewSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PreviewSection);