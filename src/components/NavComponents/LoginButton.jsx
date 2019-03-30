import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

/* Estilos para el componente, se pasa como prop con el nombre classes */
const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
});

/* Estilo que se pasa al atributo style */
const theme = {
  background: '#eca549',
  color: '#fff',
  borderRadius: '2rem',
  float: 'right'
};

/* Este componente renderiza el boton de la vista Login */
function LoginButton(props) {
  const { classes } = props;
  return (
    <div>
      <Link to="/login">
        <Button  color="primary" aria-label="add" className={classes.button} style={theme}>
          Iniciar sesión
        </Button>
      </Link>
    </div>
  );
}

LoginButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(LoginButton);