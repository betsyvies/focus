import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { getData, postData, putData } from '../../../request';
import { fromData, routes } from '../../../helper/formData';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { modelData } from '../../../helper/models';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Button from '@material-ui/core/Button';

const rol = [
  {
    value: 'USER_ROLE',
    label: 'USER_ROLE',
  }
];
/* eslint-disable no-unused-expressions */
/* Estilos para el componente, se pasa como prop con el nombre classes */
const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 90,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  button: {
    margin: theme.spacing.unit,
    background: '#eca549',
    color: '#fff',
    float: 'right',
    minWidth: '80px',
    border: '0'
  }
});

const theme = {
  input: {
    width: '25rem',
    marginBottom: '2rem'
  },
};

class ModalUsers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      rol: 'USER_ROLE',
      showPassword: false,
      dataRol: []
    };
    this.requestTable = this.requestTable.bind(this);
    this.changeTable = this.changeTable.bind(this);
    this.getData = this.getData.bind(this);
  }

  componentWillMount() {    
    if(this.props.dataTemp !== undefined ) {
      this.props.dataTemp
      .filter(elem => this.props.idTemp === elem._id)
      .map(elem => this.changeState(elem))
    } else {
      'err'
    }
  }

  changeState = elem => {
    this.setState({ name: elem.name})
    this.setState({ email: elem.email})
    this.setState({ rol: elem.role})
  }

  requestTable(jwt) {
    const data = {
      name: this.refs.name.props.value,
      email: this.refs.email.props.value,
      password: this.refs.password.props.value,
      rol: this.state.rol
    }

    let newData = fromData(data)
    let route = routes('users', '')

    postData(newData, jwt, route).then(this.getData).catch(console.log);
  }

  changeTable(jwt) {
    const data = {
      name: this.refs.name.props.value,
      email: this.refs.email.props.value,
      password: this.refs.password.props.value,
      rol: this.state.rol,
      id: this.props.id
    }

    let newData = fromData(data)
    let route = routes('users', this.props.id)

    putData(newData, jwt, route).then(this.getData).catch(console.log);
  }

  getData(data) {
    if (data.success) {
      let route = routes('users', '')
      getData(route)
        .then((users) => {
          let newData = users.data.docs
          let dataArr = modelData(newData, 'users')
          return this.props.onGetData(dataArr)
        }).catch(console.log);
        NotificationManager.success('Se guardo con éxito');
      } else {
        NotificationManager.warning('Se ha producido un error');
      }
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes, method, handleClose, jwt } = this.props;

    return (
      <div>
        <Typography variant="h6" id="modal-name-users">
          Nombre
        </Typography>
        <Input
          id="name-modal-users"
          className={classNames(classes.margin, classes.textField)}
          value={this.state.name}
          onChange={this.handleChange('name')}
          ref="name"
          style={theme.input}
        />
        <Typography variant="h6" id="modal-email-users">
          Email
        </Typography>
        <Input
          id="email-modal-users"
          value={this.state.email}
          onChange={this.handleChange('email')}
          ref="email"
          style={theme.input}
        />
        <Typography variant="h6" id="modal-password-users">
          Password
        </Typography>
        <FormControl className={classNames(classes.margin, classes.textField)}>
          <Input
            id="adornment-password"
            type={this.state.showPassword ? 'text' : 'password'}
            value={this.state.password}
            onChange={this.handleChange('password')}
            style={theme.input}
            ref="password"
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                  onMouseDown={this.handleMouseDownPassword}
                >
                  {this.state.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Typography variant="h6" id="modal-rol-adm">
          Rol
        </Typography>
        <TextField
          select
          className={classNames(classes.margin, classes.textField)}
          value={this.state.rol}
          onChange={this.handleChange('rol')}
          style={theme.input}
        >
          {rol.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Button
          variant="outlined"
          size="small"
          color="primary"
          className={classes.button}
          onClick={(e) => { method === 'post' ? this.requestTable(jwt) : this.changeTable(jwt); handleClose(false) }}
        >
          Crear
        </Button>
        <NotificationContainer/>
      </div>
    );
  }
}

ModalUsers.propTypes = {
  classes: PropTypes.object.isRequired,
};

/* Necesitamos una variable intermedia para manejar el anidamiento recursivo. */
export default withStyles(styles)(ModalUsers);