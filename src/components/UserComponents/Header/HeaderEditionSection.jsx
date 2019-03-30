import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { getData, putData } from '../../../request';
import { fromData, routes } from '../../../helper/formData';
import CreateIcon from '../../../assets/svg/school-material.svg';
import juice from 'juice';
import swal from 'sweetalert';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Filters from '../../AdmComponents/Filters';
import AlertModal from '../Alert';
/* eslint-disable no-unused-expressions */
/* Retorna estilos para el componente modal */
function getModalStyle() {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
}

/* Estilos para el componente, se pasa como prop con el nombre classes */
const theme = {
  svg: {
    width: '2rem',
    heigth: '2rem',
    verticalAlign: 'middle'
  },
  inputModal: {
    width: '25rem',
    marginBottom: '2rem'
  }
};

const styles = theme => ({
  paper: {
    position: 'absolute',
    width: '520px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: '50px'
  },
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
  buttonPreview: {
    background: '#3cb7a0',
    color: '#fff',
  },
  icon: {
    marginLeft: '1rem',
    cursor: 'pointer',
    float: 'left'
  },
  linkShow: {
    display: 'inline-block',
    textDecoration: 'none',
    color: '#fff'
  },
  linkHide: {
    display: 'none',
    textDecoration: 'none',
    color: '#fff'
  }
});

class HeaderEditionSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      name: '',
      dataTempl: {},
      data: {},
      textButton: 'Guardar',
      html: '',
      type: 'personalizado',
      typeTempReal: '',
      id: ''
    };
    this.inputRef = React.createRef();
    this.getValue = this.getValue.bind(this);
  }

  getIdTemplate = () => {
    var pathname = window.location.pathname;
    var arrPath = pathname.split('/');

    return arrPath.pop()
  }

  componentWillMount = () => {
    let id = this.getIdTemplate()
    let routeGene = routes('templates?type=generico', '')
    getData(routeGene)
    .then((templates) => {
      if (templates.success) {
        let allData = templates.data.docs
        allData
          .filter(e => e._id === id)
          .map(e => getValueTemp(e, allData, 'post'))
      } else {
        return 'err'
      }
    })

    if (this.props.role !== 'ADMIN_ROLE') {
      let routeUser = routes('templates?user=', {idTemp: this.props.idUser})
      getData(routeUser)
      .then((templates) => {
        if (templates.success) {
          let allData = templates.data.docs
          allData
            .filter(e => e._id === id)
            .map(e => getValueTemp(e, allData, 'put'))
        } else {
          return 'err'
        }
      })
    } else {
      let routePero = routes('templates?type=personalizado', '')
      getData(routePero)
      .then((templates) => {
        if (templates.success) {
          let allData = templates.data.docs
          allData
            .filter(e => e._id === id)
            .map(e => getValueTemp(e, allData, 'put'))
        } else {
          return 'err'
        }
      })
    }

    const getValueTemp = (e, allData, method) => {
      valueTemplate(e.name, e._id, e, e.type, allData)
      this.props.onGetMethod(method)
    }

    const valueTemplate = (name, id, data, type, allData) => {
      let newData = {
        idUser: data.user._id, 
        id: data._id,
      }
      type === 'generico' ? data :  addFilters(newData, data); 
      this.setState({typeTempReal: type})
      this.setState({dataTempl: data})
      this.setState({name: name})
      this.setState({id: id})
      this.setState({dataTemp: allData})
    } 

    const addFilters = (data, elem) => {
      data.company = `${elem.company.id} , ${elem.desktop.name}`
      data.desktop = `${elem.desktop.id} , ${elem.desktop.name}`
      data.feed = `${elem.feed.id} , ${elem.feed.name}`
      return data
    }
  } 
  
  onContentEditable = () => {
    return this.inputRef.current.focus()
  }

  handleAlert = (html, name, jwt) => {
    swal({
      title: "Esta seguro de guardar la plantilla " + name,
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
      template: this.state.id,
      file: new Blob([html], { type: "txt/html" })
    }
    let newData = fromData(data)
    let route = routes('templates', this.state.id)

    putData(newData, jwt, route).then(response => {
      if(response.success) {
        NotificationManager.success('La modificacion de la plantilla ha sido guardado con éxito');
      } else {
        NotificationManager.warning('Se ha producido un error');
      }
    })
  }

  sendTemplate = (html, name, jwt, role) => {
    if (window.localStorage.getItem('gjs-html') !== null) {
      const html = window.localStorage.getItem('gjs-html');
      const css = window.localStorage.getItem('gjs-css');
      const tmpl = html + `<style>${css}</style>`
      const tmplStyle = juice(tmpl);
      return role === "USER_ROLE" ? tmplStyle : (this.handleAlert(tmplStyle, name, jwt) && console.log(tmplStyle));
    } else {
      return role === "USER_ROLE" ? html : this.handleAlert(html, name, jwt) ;
    }
  }

  showButtonPrev = (className, id) => {
    let $ = this.props
    return  <Link to={`/preview-data-section/${id}`} className={className}>
              <Button variant="contained" className={$.classes.buttonPreview}>
                Vista Previa
              </Button>
            </Link>
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, html, method, role, idUser, jwt, dataAlert, onChangeDataAlert } = this.props;
    const { dataTemp, name, type, textButton, id, typeTempReal } = this.state
    return ( 
      <div>
        <div className={classes.container}>
          <div className={classes.containerTitle}>
            <span className={classes.icon} onClick={(e) => {this.onContentEditable()}}>
              <img  src={CreateIcon} style={theme.svg} alt={CreateIcon}/>
            </span>
            <input type="text" ref={this.inputRef} className={classes.input} value={this.state.name} onChange={this.getValue.bind(this)} placeholder={this.state.value}/>
          </div>
          <div className={classes.containerButton}>
            {typeTempReal === 'generico' && role === 'USER_ROLE' ? this.showButtonPrev(classes.linkHide, id) : this.showButtonPrev(classes.linkShow, id)}
            <Button variant="contained" className={classes.buttonSave} onClick={(e) => {role === "USER_ROLE" ? this.handleOpen() : this.sendTemplate(html, name, jwt, role)}} 
            >
              Guardar
            </Button>
            <Modal
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
              open={this.state.open}
              onClose={this.handleClose}
              style={getModalStyle()}
            >
              <div className={classes.paper}>
                <Filters type={type} textButton={textButton} onChangeDataAlert={onChangeDataAlert} idTemp={id} dataTemp={dataTemp}  _idUser={idUser} styleInput={theme.inputModal} handleClose={this.handleClose} name={name} sendTemplate={this.sendTemplate} html={html} method={method} jwt={jwt} role={role}/>
              </div>
            </Modal>
            <AlertModal dataAlert={dataAlert} onChangeDataAlert={onChangeDataAlert} idTemp={id}/>
            <NotificationContainer/>
          </div>
        </div>
      </div>
    )
  }
}

HeaderEditionSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HeaderEditionSection);