import React, {Component} from 'react';
import { push } from 'react-router-redux';
import MenuAppBar from './Menu/MenuAppBar';

import { logout } from '../../actions/userActions';

class Navigation extends Component{
  constructor(props){
    super(props);
    this.goHome = this.goHome.bind(this);
    this.logout = this.logout.bind(this);
  }

  goHome(){
    this.props.dispatch(push('/'));
  }

  logout(){
    this.props.dispatch(logout());
    this.props.dispatch(push('/'));
  }
   
  render(){
    return <MenuAppBar goHome={this.goHome} user={this.props.user} logout={this.logout} />
  }
}


export default Navigation;