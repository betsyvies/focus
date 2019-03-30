import React from 'react';
import img from '../../../assets/img/login.jpg';
import Typography from '@material-ui/core/Typography';
import Form from '../../../containers/LoginContainers/Form';

import '../../../css/login.css'

var backImg = {
  backgroundImage: `url(${img})`
}

class Login extends React.Component {
  render() {
    return (
      <div className="container-login">
        <div className="wrap-login">
          <div className="login-more" style={backImg}>
          </div>
          <div className="login-form">
            <Typography variant="h4" className="title-form">
              EDITOR EMAIL
            </Typography>
            <Form />
          </div>
        </div>
      </div>
    )
  }
}

export default Login;