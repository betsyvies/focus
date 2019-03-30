import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { FormErrors } from './FormErrors';
import * as actions  from '../../../actions/userActions';
import { login } from '../../../request';
import { fromData ,routes } from '../../../helper/formData'
import { push } from 'react-router-redux';

import { Route } from 'react-router-dom';

import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const styles = {
  button: {
    width: '100%',
    background: '#3cb7a0',
    color: '#fff',
  },
  link: {
    textDecoration: 'none',
    color: '#fff'
  }
};

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      formErrors: { email: '', password: '' },
      emailValid: false,
      passwordValid: false,
      formValid: false
    }
    this.requestAuth = this.requestAuth.bind(this);
    this.auth = this.auth.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  requestAuth(){
    const credentials = {
      email: this.refs.emailField.props.value,
      password: this.refs.passwordField.props.value,
    }

    let newData = fromData(credentials)
    let route = routes('login', '')
  
    login(newData, route)
      .then(response=>{
        if (response.success) {
          this.auth(response);
        } else {
          alert(response);
        }
      })
      .catch(err=>{
        console.log(err);
      });
  }

  auth(data){
    this.props.dispatch(actions.login(data.jwt));
    this.props.dispatch(actions.loadUser(data.user));
    this.props.dispatch(push('/'));
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
    this.validateField(prop, event.target.value)
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case 'email':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.email = emailValid ? '' : ' es invalido';
        break;
      case 'password':
        passwordValid = value.length >= 6;
        fieldValidationErrors.password = passwordValid ? '' : ' muy corto';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      passwordValid: passwordValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({ formValid: this.state.emailValid && this.state.passwordValid });
  }

  errorClass(error) {
    return (error.length === 0 ? '' : 'error');
  }

  handleMouseDownPassword = event => {
    event.preventDefault();
  };

  handleClickShowPassword = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  handleOnSubmit(e) {
    e.preventDefault()
  }

  render() {
    const { classes } = this.props;
    return (
      <form className="form-login" onSubmit={this.handleOnSubmit}>
        <div className="panel panel-default">
          <FormErrors formErrors={this.state.formErrors} />
        </div>
        <div className={`form-control ${this.errorClass(this.state.formErrors.email)}`}>
          <FormControl fullWidth>
            <InputLabel htmlFor="adornment-password">Email</InputLabel>
            <Input
              type={'email'}
              value={this.state.email}
              onChange={this.handleChange('email')}
              ref="emailField"
            />
          </FormControl>
        </div>
        <div className={`form-control ${this.errorClass(this.state.formErrors.password)}`}>
          <FormControl fullWidth>
            <InputLabel htmlFor="adornment-password">Password</InputLabel>
            <Input
              id="adornment-password"
              type={this.state.showPassword ? 'text' : 'password'}
              value={this.state.password}
              onChange={this.handleChange('password')}
              ref="passwordField"
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
              } />
          </FormControl>
        </div>
        <div className="form-control">
          <Route path="/login"
            exact
            render={() => (          
            <Button type="submit" size="large" variant="contained" className={classes.button}
            disabled={!this.state.formValid}
            onClick={this.requestAuth}>
              ingresar
            </Button>)}>
          </Route>
        </div>
      </form>
    )
  }
}

Form.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Form);