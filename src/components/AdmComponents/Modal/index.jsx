import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import ModalTempl from './ModalTmpl';
import ModalUsers from './ModalUsers';
import ModalIndtrs from './ModalIndtrs';
import Button from '@material-ui/core/Button';

/* Retorna estilos para el componente modal */
function getModalStyle() {
  return {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
}

/* Estilos para el componente, se pasa como prop con el nombre classes */
const styles = theme => ({
  paper: {
    position: 'absolute',
    width: '520px',
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: '50px'
  },
});

/* Estilo que se pasa al atributo style */
const theme = {
  primary: {
    background: '#44bfaa',
    color: '#fff',
    marginRight: '1rem'
  },
};

class SimpleModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      bodyModal: '',
      textButton: 'Crear'
    };
  }

  handleModal = (handleClose, textButton) => {
    var pathName = window.location.pathname;

    if ('/list-templates' === pathName) {
      return <ModalTempl textButton={textButton} role={this.props.role} method={'post'} onGetData={this.props.onGetData} dataTemp={this.props.dataTable} _idUser={this.props._idUser} jwt={this.props.jwt} handleClose={handleClose}/>
    } else if ('/list-users' === pathName) {
      return <ModalUsers method={'post'} onGetData={this.props.onGetData} dataTable={this.props.dataTable} _idUser={this.props._idUser} jwt={this.props.jwt} handleClose={handleClose}/>
    } else if ('/list-indicators' === pathName) {
      return <ModalIndtrs method={'post'} onGetData={this.props.onGetData} dataTable={this.props.dataTable} _idUser={this.props._idUser} jwt={this.props.jwt} handleClose={handleClose}/>
    } else {
      return 'err'
    }
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    const { textButton } = this.state;

    return (
      <div>
        <Button onClick={this.handleOpen} style={theme.primary}>Crear</Button>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          style={getModalStyle()}
        >
          <div className={classes.paper}>
            {this.handleModal(this.handleClose, textButton)}
          </div>
        </Modal>
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