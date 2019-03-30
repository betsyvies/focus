import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

/* Estilos para el componente, se pasa como prop con el nombre classes */
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

/* Estilos que se pasan al atributo style */
const theme = {
  background: '#eca549',
  color: '#fff',
  borderRadius: '2rem',
  float: 'right'
};

const themeDisabled = {
  background: '#c3c3c3',
  color: '#fff',
  borderRadius: '2rem',
  float: 'right'
};

/* Este componente renderiza el boton del Modal */
class RoundButton extends React.Component {
  render() {
  const { classes } = this.props;
    return (
      <div>
        <Button variant="contained" disabled={this.props.disabled} className={classes.button} style={this.props.disabled ? themeDisabled : theme}>
          Enviar
        </Button>
      </div>
    );
  }
}

RoundButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RoundButton);
