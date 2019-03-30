import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '../Modal';

/* Estilos para el componente, se pasa como prop con el nombre classes */
const styles = {
  container: {
    padding: '0.7rem',
    background: '#f2f1f2',
    display: 'flex',
  },
  containerButton: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  buttonTry: {
    background: '#ff8305',
    border: '1px solid #fff',
    color: '#fff',
  }
};

class HeaderEditionSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      html: ''
    };
  }

  render() {
    const { classes, html, jwt } = this.props;
    return (
      <div>
        <div className={classes.container}>
          <div className={classes.containerButton}>
            <Modal className={classes.buttonTry} html={html} jwt={jwt} />
          </div>
        </div>
      </div>
    )
  }
}

HeaderEditionSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderEditionSection);