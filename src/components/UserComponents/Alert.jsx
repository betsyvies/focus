import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import HelpIcon from '@material-ui/icons/Help';
import '../../css/app.css';

/* Retorna estilos para el componente modal */
function getModalStyle() {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };
}

/* Estilos para el componente, se pasa como prop con el nombre classes */
const styles = theme => ({
  paper: {
    position: 'absolute',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    textAlign: 'center',
  },
  buttonPreview: {
    background: '#287dce',
    color: '#fff',
  },
  buttonList: {
    background: '#fff',
    color: '#000',
    marginLeft: '1rem',
    marginRight: '1rem',
    heigth: '1rem'
  },
  iconContainer: {
    textAlign: 'center',
    marginBottom: '1rem',
  },
  icon: {
    fontSize: '8rem',
    color: '#9de0f6'
  },
  link: {
    textDecoration: 'none',
    color: '#fff'
  },
  containerText: {
    marginBottom: '1rem'
  },
  text: {
    margin: '0'
  },
  title: {
    margin: '0',
    fontWeight: '500 !important'
  }
})

class AlertModal extends React.Component {

  handleClose = (data) => {
    data.open = false
    this.props.onChangeDataAlert(data)
  };

  render() {
    const { classes, dataAlert } = this.props;

    return (
      <div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={dataAlert.open}
          onClose={this.handleClose}
          style={getModalStyle()}
        >
          <div className={classes.paper}>
            <div className={classes.iconConatiner}>
              <HelpIcon className={classes.icon}/>
            </div>
            <div className={classes.containerText}>
              <h2 className={classes.title}>¿Qué desea hacer?</h2>
              <p className={classes.text}>Ir a</p>
            </div>
            <Link to={`/get-templates`} className={classes.link}>
              <Button variant="contained" className={classes.buttonList} onClick={(e) => { this.handleClose(dataAlert)}}>
                Lista de Plantillas
              </Button>
            </Link>
            <Link to={`/preview-data-section/${dataAlert.id}`} className={classes.link}>
              <Button variant="contained" className={classes.buttonPreview} onClick={(e) => { this.handleClose(dataAlert)}}>
                Visualizar plantilla
              </Button>
            </Link>
          </div>
        </Modal>
      </div>
    );
  }
}

AlertModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

/* Necesitamos una variable intermedia para manejar el anidamiento recursivo. */
const AlertModalWrapped = withStyles(styles)(AlertModal);

export default AlertModalWrapped;