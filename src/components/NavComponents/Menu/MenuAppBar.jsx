import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ToolbarComponent from './Toolbar';
import LoginButton from '../LoginButton'

/* Estilos para el componente, se pasa como prop con el nombre classes */
const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
    textAlign: 'left'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  link: {
    textDecoration: 'none',
    color: '#fff'
  }
};

/* Estilo que se pasa al atributo style */
const theme = {
  background: '#44bfaa',
};

/* Este componente renderiza el navbar que esta en todas las vistas */
const MenuAppBar = ({ classes, goHome, logout, user }) => (
  <div className={classes.root}>
    <AppBar position="static" style={theme}>
      <Toolbar className="font-family">
        <Typography variant="h6" color="inherit" className={classes.flex}>
          <Link to={'/'} className={classes.link}>
            IMEDIA
          </Link>
        </Typography>
        <div>
          { user.jwt ? <ToolbarComponent logout={logout} /> : <LoginButton />}
        </div>
      </Toolbar>
    </AppBar>
  </div>
);

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);