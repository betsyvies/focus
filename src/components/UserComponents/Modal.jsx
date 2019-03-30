import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { postData } from '../../request';
import { fromData, routes } from '../../helper/formData';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import RoundButton from './Buttons/RoundButton';
import Grid from '@material-ui/core/Grid';
import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/AddCircleOutline';
import Tooltip from '@material-ui/core/Tooltip';
import TagsInput from 'react-tagsinput';
import '../../css/app.css';

import 'react-notifications/lib/notifications.css';
import 'react-tagsinput/react-tagsinput.css';
/* eslint-disable no-unused-expressions */
/* Retorna estilos para el componente modal */
function getModalStyle() {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
}

/* Elimina los nodos duplicados de una matriz de objetos */
Array.prototype.unique = function(a){
  return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
});

/* Estilos para el componente, se pasa como prop con el nombre classes */
const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 90,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  },
  input: {
    width: '100%',
    paddingLeft: '0.5rem',
    height: '2.2rem',
    fontSize: '1rem',
    outline: 'none',
    marginBottom: '1rem'
  },
  marginBottom: {
    marginBottom: '1rem'
  },
  marginTop: {
    marginTop: '1rem !important'
  }
});

/* Estilo que se pasa al atributo style */
const theme = {
    primary: {
        background: '#ff8305',
        color: '#fff',
    },
    info: {
        background: 'rgb(0, 163, 185)',
        color: '#fff',
        borderRadius: '2rem'
    },
    success: {
        background: 'hsl(122, 42%, 45%)',
        color: '#fff',
        borderRadius: '2rem'
    },
    warning: {
        background: 'hsl(33, 100%, 50%)',
        color: '#fff',
        borderRadius: '2rem'
    },
    danger: {
        background: 'hsl(3, 89%, 57%)',
        color: '#fff',
        borderRadius: '2rem'
    },
    rose: {
        background: 'hsl(342, 80%, 50%)',
        color: '#fff',
        borderRadius: '2rem'
    },
    button: {
      backgroundColor: '#dddde2',
      margin: '0.3rem'
    },
    icon: {
      marginLeft: '0.5rem',
      marginRight: '0.5rem',
      fontSize: '1rem',
      display: 'flex'
    },
    buttonNotification: {
      display: 'none'
    }
};

class SimpleModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      tags: [],
      arrTags: [],
      options: 'success',
      subject: '' 
    };
    this.validationInput = this.validationInput.bind(this);
    this.returnTagsUnique = this.returnTagsUnique.bind(this);
    this.handleSendEmail = this.handleSendEmail.bind(this)
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = (tags) => {
    this.setState({tags})
  };

  handleChangeInput = (tag) => {
    this.setState({tag})
  }

  handleChangeAffair = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  componentDidMount = () => {
    if (window.localStorage.getItem('tags') !== null) {
      var savedTags = window.localStorage.getItem('tags')
      var arrayValue = savedTags.split(",");
      this.setState({ arrTags: arrayValue});
    } 
  }

  handleChangeStateTags = () => {
    if (window.localStorage.getItem('tags') !== null) {
      var savedTags = window.localStorage.getItem('tags')
      var arrayValue = savedTags.split(",");
      this.setState({ arrTags: arrayValue});
    } 
  }

  handleChangeArrayTags = (e, tags) => {
    e.preventDefault();
    if (window.localStorage.getItem('tags') !== null) {
      var savedTags = window.localStorage.getItem('tags')
      var arrayValue = savedTags.split(",");
      tags.map(tag => arrayValue.push(tag))
      localStorage.setItem('tags', arrayValue.unique());
      this.setState({ arrTags: arrayValue.unique()});
    } else {
      localStorage.setItem('tags', tags)
    }
  }

  handleCloseIcon = (value) => {
    var arr = window.localStorage.getItem('tags')
    var arrayValue = arr.split(",");
  
    var index = arrayValue.indexOf(value);
    arrayValue.splice(index, 1);

    localStorage.setItem('tags', arrayValue);
    this.setState({ arrTags: arrayValue });
  }

  validationInput = () => {
    if (this.state.tags.length > 0) {
      return false;
    } else {
      return true;
    }
  }

  returnTagsUnique = (tagValue) => {
    if (this.state.tags.length === 0) {
      const newTags = []
      newTags.push(tagValue);
      this.setState({ tags: newTags});
    } else if (this.state.tags.length > 0) {
      const arrayTags = this.state.tags;
      arrayTags.push(tagValue);
      this.setState({ tags: arrayTags.unique() });
    }
  }

  cleanInput = () => {
    const arrEmpty = [];
    this.setState({ tags: arrEmpty });
  }

  handleSendEmail = (jwt, html) => {
    var emails = this.state.tags.toString()
    var pathname = window.location.pathname;
    var arrPath = pathname.split('/');
    var id = arrPath.pop()

    var data = {
      subject: this.state.subject,
      template: id,
      file: new Blob([html], { type: "txt/html" }),
      to: emails
    }

    let newData = fromData(data)
    let route = routes('sendEmail', '')

    postData(newData, jwt, route).then(response => {
      if(response.success) {
        NotificationManager.success('Su correo electrónico de prueba ha sido enviado con éxito');
      } else {
        NotificationManager.warning('Se ha producido un error');
      }
    })
  }

  render() {
    const { classes, html, jwt} = this.props;
    const { subject, tags } = this.state
    const EMAIL_VALIDATION_REGEX = /^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i

    return (
      <div>
        <span onClick={(e) => this.handleChangeStateTags(e, this.state.arrTags)} >
          <Button onClick={this.handleOpen} style={theme.primary}>Enviar por email</Button>
        </span>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          style={getModalStyle()}
        >
          <div className={classes.paper}>
            <Typography variant="h6" id="modal-title" className={classes.marginBottom}>
              Enviar una prueba
            </Typography>
            <Typography variant="subtitle1">
              Asunto
            </Typography>
            <input 
              type={'text'} 
              className={classes.input} 
              onChange={this.handleChangeAffair('subject')}
              value={subject} 
              ref="subject"
            />
            <Typography variant="subtitle1" id="simple-modal-description">
              Enviar un email de prueba hasta a 10 direcciones
            </Typography>
            <TagsInput 
              value={this.state.tags} 
              addKeys={[9, 13, 32, 186, 188]}
              onlyUnique
              addOnPaste
              validationRegex={EMAIL_VALIDATION_REGEX}
              pasteSplit={data => {
                return data.replace(/[\r\n,;]/g, ' ').split(' ').map(d => d.trim())
              }}
              tagProps={{className:'react-tagsinput-tag tags'}}
              inputProps={{className: 'react-tagsinput-input', placeholder: 'email@example.com'}}
              style={theme.primary}
              onChange={this.handleChange} 
              onChangeInput={this.handleChangeInput}
              />
            <Typography variant="subtitle1" className={classes.marginTop}>
              Emails recientes
            </Typography> 
            <Grid>
              <Grid item>
              {this.state.arrTags.length > 0 && window.localStorage.getItem('tags').length > 0? 
                this.state.arrTags.map(tooltipValue => (
                  tooltipValue !== "" ? 
                  (<Tooltip key={tooltipValue} id="tooltip-top-start" title={tooltipValue} placement="top-start">
                    <Button style={theme.button} >
                      <span onClick={(e) => {this.returnTagsUnique(tooltipValue)}} >
                        <AddIcon style={theme.icon}/>
                      </span>
                      {tooltipValue}
                      <span onClick={(e) => {this.handleCloseIcon(tooltipValue)}}>
                        <ClearIcon style={theme.icon}/>
                      </span>
                    </Button>
                  </Tooltip>) : console.log('err')
                )) : console.log('err')
              }
              </Grid>
            </Grid>
            <span onClick={(e) => {this.handleChangeArrayTags(e, tags); this.handleClose(); this.cleanInput(); this.handleSendEmail(jwt, html)}} >
              <RoundButton disabled={this.validationInput()}/>
            </span>
          </div>
        </Modal>
        <NotificationContainer/>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

/* Necesitamos una variable intermedia para manejar el anidamiento recursivo. */
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;
