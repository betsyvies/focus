import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  labelAct: {
    background: '#52af52',
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '0',
    fontSize: '0.7rem',
    minWidth: '54px',
    minHeight: '18px',
    textTransform: 'none'
  },
  labelIn: {
    background: '#6c6c6c',
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '0',
    fontSize: '0.7rem',
    minWidth: '54px',
    minHeight: '18px',
    textTransform: 'none'
  }
});

const Label = ({val, classes}) => {
  return val ? <Button className={classes.labelAct}>Activo</Button> : <Button className={classes.labelIn}>Inactivo</Button>;
}

Label.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Label);