import React, {Component} from 'react';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Email from '@material-ui/icons/Email';
import ArrowDropDownCircle from '@material-ui/icons/ArrowDropDownCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

/* Estilo que se pasa al atributo style */
const container = {
  width: '10rem'
};

const containerButton = {
  display: 'inline-block'
};

/* Este componente renderiza la barra de herramientas que aparece en el navbar */
class ToolbarComponent extends Component {
  state = {
    anchorEl: null,
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
        <div style={container}>
          <div style={containerButton}>
            <IconButton color="inherit">
              <AccountCircle />
            </IconButton>
          </div>
          <div style={containerButton}>
            <IconButton color="inherit">
              <Email/>
            </IconButton>
          </div>
          <div style={containerButton}>
            <IconButton
              aria-haspopup="true"
              onClick={this.handleMenu}
              color="inherit"
            >
              <ArrowDropDownCircle/>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={this.handleClose}
            >
              <MenuItem onClick={this.handleClose}>Profile</MenuItem>
              <MenuItem onClick={this.handleClose}>Mi cuenta</MenuItem>
              <MenuItem onClick={this.props.logout}>Cerrar sesión</MenuItem>
            </Menu>
          </div> 
        </div>
    );
  }
};

export default ToolbarComponent;