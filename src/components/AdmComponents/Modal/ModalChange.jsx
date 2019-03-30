import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import amber from '@material-ui/core/colors/amber';
import grey from '@material-ui/core/colors/grey';
import Modal from '@material-ui/core/Modal';
import ModalTempl from './ModalTmpl';
import ModalUsers from './ModalUsers';
import ModalIndtrs from './ModalIndtrs';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';

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
  amberAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: amber[800],
    width: '30px',
    height: '30px',
    marginRight: 0
  },
  iconHover: {
    cursor: 'pointer',
    margin: theme.spacing.unit * 2,
    fontSize: '16px',
    '&:hover': {
      color: grey[300],
    },
  },
  iconContainer:  {
    textAlign: '-webkit-right'
  }
});

class ModalChange extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      bodyModal: '',
      textButton: 'Actualizar'
    };
  }

  handleModal = (handleClose, dataTemp, idTemp, jwt, textButton) => {
    var pathName = window.location.pathname;
    if ('/list-templates' === pathName) {
      return <ModalTempl textButton={textButton} id={this.props.id} method={'put'} onGetData={this.props.onGetData} idTemp={idTemp} _idUser={this.props._idUser} jwt={jwt} handleClose={handleClose} dataTemp={dataTemp}/>
    } else if ('/list-users' === pathName) {
      return <ModalUsers id={this.props.id} method={'put'} onGetData={this.props.onGetData} dataTemp={dataTemp} idTemp={idTemp} _idUser={this.props._idUser} jwt={jwt} handleClose={handleClose}/>
    } else if ('/list-indicators' === pathName) {
      return <ModalIndtrs id={this.props.id} method={'put'} onGetData={this.props.onGetData} dataTemp={dataTemp} idTemp={idTemp} _idUser={this.props._idUser} jwt={jwt} handleClose={handleClose}/>
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
    const { classes, dataTable, idTemp, jwt } = this.props;
    const { textButton } = this.state;

    return (
      <div>
        <div onClick={() => {this.handleOpen()}} className={classes.iconContainer}>
          <Avatar className={classes.amberAvatar}>
            <Icon className={classes.iconHover}>create</Icon>
          </Avatar>
        </div>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
          style={getModalStyle()}
        >
          <div className={classes.paper}>
            {this.handleModal(this.handleClose, dataTable, idTemp, jwt, textButton)}
          </div>
        </Modal>
      </div>
    );
  }
}

ModalChange.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ModalChange);