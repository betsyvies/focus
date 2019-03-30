import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { getData, putData } from '../../../request';
import { fromData, routes } from '../../../helper/formData';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import CreateIcon from '../../../assets/svg/school-material.svg';
import swal from 'sweetalert';
import Button from '@material-ui/core/Button';
/* eslint-disable no-unused-expressions */
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
  input: {
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
      dataTempl: {},
      name: '',
    };
    this.inputRef = React.createRef();
  }
  
  componentWillMount = () => {
    var pathname = window.location.pathname;
    var arrPath = pathname.split('/');
    var id = arrPath.pop()
    let route = routes('templates', '')
    getData(route)
      .then((templates) => {
        templates.data.docs
        .filter(elem => elem._id === id)
        .map(elem => this.changeState(elem))
      })
  } 

  changeState = (elem) => {
    this.setState({dataTempl: {idUser: elem.user._id, id: elem._id}})
    this.setState({name:elem.name})
  }

  onContentEditable = () => {
    return this.inputRef.current.focus()
  }

  handleAlert = (method, html, name, jwt) => {
    swal({
      title: "Esta seguro de guardar la plantilla " + this.state.name,
      buttons: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.changeTable(html, name, jwt)
      }
    });
  }

  getValue = (event) => {
    this.setState({name: event.target.value})
  }

  changeTable = (html, name, jwt) => {
    const data = {
      name: name,
      template: this.state.dataTempl.id,
      file: new Blob([html], { type: "txt/html" })
    }
    let newData = fromData(data)
    let route = routes('templates', this.state.dataTempl.id)

    putData(newData, jwt, route).then(response => {
      if(response.success) {
        NotificationManager.success('La modificacion de la plantilla ha sido guardado con éxito');
      } else {
        NotificationManager.warning('Se ha producido un error');
      }
    })
  }

  render() {
    const { classes, html, method, style, jwt } = this.props;
    return (
      <div style={style}>
        <div className={classes.container}>
          <div className={classes.containerTitle}>
            <span className={classes.icon} onClick={(e) => {this.onContentEditable()}}>
              <img src={CreateIcon} style={styles.svg} alt={CreateIcon}/>
            </span>
            <input type="text" ref={this.inputRef} className={classes.input} value={this.state.name} onChange={this.getValue.bind(this)} placeholder={this.state.name}/>
          </div>
          <div className={classes.containerButton}>
            <Button variant="contained" className={classes.buttonSave} onClick={(e) => {this.handleAlert(method, html, this.state.name, jwt) }}>
              Guardar
            </Button>
            <NotificationContainer/>
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