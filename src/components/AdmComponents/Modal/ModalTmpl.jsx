import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import Filter from '../Filters'
/* eslint-disable no-unused-expressions */
const types = [
  {
    value: 'generico',
    label: 'generico',
  },
  {
    value: 'personalizado',
    label: 'personalizado',
  }
];

/* Estilos para el componente, se pasa como prop con el nombre classes */
const styles = theme => ({
  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 90,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
  }, 
  container: {
    width: '100%',
    margin: 0
  }
});

const theme = {
  input: {
    width: '25rem',
    marginBottom: '2rem'
  },
};

class ModalTmpl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'generico',
      name: '',
    };
  }

  componentWillMount() {    
    if(this.props.dataTemp !== undefined ) {
      this.props.dataTemp
      .filter(elem => this.props.idTemp === elem._id)
      .map(elem => this.changeState(elem))
    } else {
      'err'
    }
  }

  changeState = elem => {
    this.setState({ name: elem.name})
    this.setState({ type: elem.type})
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    const { classes, id, idTemp, method, _idUser, jwt, dataTemp, onGetData, handleClose, textButton, role } = this.props;
    const { name, type } = this.state;

    return(
      <div>
        <Typography variant="h6" id="modal-title-adm">
          Nombre de la plantilla
        </Typography>
        <Input
          type={'text'}
          value={this.state.name}
          onChange={this.handleChange('name')}
          ref="name"
          style={theme.input}
        />
        <Typography variant="h6" id="modal-type-adm">
          Tipo
        </Typography>
        <TextField
          select
          className={classNames(classes.margin, classes.textField)}
          value={type}
          onChange={this.handleChange('type')}
          style={theme.input}
        >
          {types.map(option => (
            <MenuItem key={option.value} value={option.value}>
              <div >{option.label}</div>
            </MenuItem>
          ))}
        </TextField>
        <Filter id={id} role={role} type={type} name={name} method={method} textButton={textButton} styleInput={theme.input} idTemp={idTemp} jwt={jwt} _idUser={_idUser} dataTemp={dataTemp} onGetData={onGetData} handleClose={handleClose}/>
      </div>
    );
  }
}

ModalTmpl.propTypes = {
  classes: PropTypes.object.isRequired,
};

/* Necesitamos una variable intermedia para manejar el anidamiento recursivo. */
export default withStyles(styles)(ModalTmpl);
