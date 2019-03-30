import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from './Modal/index';

/* Estilos para el componente, se pasa como prop con el nombre classes */
const styles = {
  container: {
    padding: '0.7rem',
    background: '#f2f1f2',
    display: 'flex',
  },
  containerButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '50%'
  },
  arrow: {
    width: '5%'
  },
  containerTitle: {
    minWidth: '50%',
    display: 'flex',
    alignItems: 'center'
  },
  title: {
    margin: '1rem 0 1rem 1rem',
    outline: 'none',
    border: '0',
    background: '#f4f3f4',
    fontSize: '1.5rem',
    width: '90%'
  },
  buttonSave: {
    background: '#eca549',
    color: '#fff',
    marginLeft: '1rem',
    marginRight: '1rem',
    heigth: '1rem'
  },
  buttonTry: {
    background: '#303640',
    border: '1px solid #fff',
    color: '#fff',
  },
  icon: {
    marginLeft: '1rem',
    cursor: 'pointer',
    float: 'left'
  },
  svg: {
    width: '2rem',
    heigth: '2rem',
    verticalAlign: 'middle'
  },
  link: {
    textDecoration: 'none',
    color: '#fff'
  }
};

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nameView: this.props.nameView,
      name: ''
    };
  }

  componentDidMount = () => {
    var pathname = window.location.pathname;


    this.state.nameView.map(elemt => {
      if (pathname === elemt.pathName) {
        return this.setState({ name: elemt.view});
      } else {
        return 'err'
      }
    })
  }

  render() {
    const { classes, onGetData, _idUser, dataTable, jwt, role } = this.props;
    return (
      <div>
        <div className={classes.container}>
          <div className={classes.containerTitle}>
            <p className={classes.title}>{this.state.name}</p>
          </div>
          <div className={classes.containerButton}>
            <Modal className={classes.buttonTry} jwt={jwt} onGetData={onGetData} _idUser={_idUser} role={role} dataTable={dataTable}/>
          </div>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);