import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { getData, postData, putData } from '../../../request';
import { fromData, routes } from '../../../helper/formData';
import { modelData } from '../../../helper/models';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';
/* eslint-disable no-unused-expressions */
const ranges = [
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
  button: {
    margin: theme.spacing.unit,
    background: '#eca549',
    color: '#fff',
    float: 'right',
    minWidth: '80px',
    border: '0'
  }
});

const theme = {
  input: {
    width: '25rem',
    marginBottom: '2rem'
  },
};

class ModalIndtrs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: '',
      name: '',
      selector: '',
      var: ''
    };
    this.requestTable = this.requestTable.bind(this);
    this.changeTable = this.changeTable.bind(this);
    this.getData = this.getData.bind(this);
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
    this.setState({ selector: elem.selector})
    this.setState({ type: elem.type})
    this.setState({ var: elem.variable})
  }

  requestTable(jwt) {
    const data = {
      name: this.refs.name.props.value,
      selector: this.refs.selector.props.value,
      variable: this.refs.var.props.value,
      type: this.state.type,
      description: '',
      configuration: ''
    }

    let newData = fromData(data)
    let route = routes('indicators', '')

    postData(newData, jwt, route).then(this.getData).catch(console.log);
  }

  changeTable(dataTemp, jwt) {
    let data = {};
    dataTemp
    .filter(elem => this.props.id === elem._id)
    .map(elem => this.addPropData(data, elem))

    const dataTableCell = {
      name: this.refs.name.props.value,
      selector: this.refs.selector.props.value,
      type: this.state.type,
      variable: this.refs.var.props.value,
      description: data.description,
      configuration: data.configuration,
      id: this.props.id,
    }

    let newData = fromData(dataTableCell)
    let route = routes('indicators', this.props.id)

    putData(newData, jwt, route).then(this.getData).catch(console.log);
  }

  addPropData = (data, elem) => {
    data.description = elem.description;
    data.configuration = elem.configuration;
    return data
  }

  getData(data) {
    if (data.success) {
      let route = routes('indicators', '')
      getData(route)
        .then((indicator) => {
          let newData = indicator.data.docs
          let dataArr = modelData(newData, 'indicators')
          return this.props.onGetData(dataArr)
        }).catch(console.log);
        NotificationManager.success('Se guardo con éxito');
      } else {
        NotificationManager.warning('Se ha producido un error');
      }
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    const { classes, dataTemp, method, handleClose, jwt } = this.props;

    return (
      <div>
        <Typography variant="h6">
          Nombre de la variable
        </Typography>
        <Input
          type={'text'}
          className={classNames(classes.margin, classes.textField)}
          onChange={this.handleChange('name')}
          value={this.state.name}
          ref="name"
          style={theme.input}
        />
        <Typography variant="h6">
          Selector
        </Typography>
        <Input
          type={'text'}
          className={classNames(classes.margin, classes.textField)}
          onChange={this.handleChange('selector')}
          value={this.state.selector}
          ref="selector"
          style={theme.input}
        />
        <Typography variant="h6">
          Tipo
        </Typography>
        <TextField
          select
          className={classNames(classes.margin, classes.textField)}
          value={this.state.type}
          onChange={this.handleChange('type')}
          style={theme.input}
        >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Typography variant="h6">
          Variable
        </Typography>
        <Input
          type={'text'}
          onChange={this.handleChange('var')}
          value={this.state.var}
          ref="var"
          className={classNames(classes.margin, classes.textField)}
          style={theme.input}
        />
        <Button
          variant="outlined"
          size="small"
          color="primary"
          className={classes.button}
          onClick={(e) => { method === 'post' ? this.requestTable(jwt) : this.changeTable(dataTemp, jwt); handleClose(false) }}
        >
          Crear
        </Button>
        <NotificationContainer/>
      </div>
    );
  }
}

ModalIndtrs.propTypes = {
  classes: PropTypes.object.isRequired,
};

/* Necesitamos una variable intermedia para manejar el anidamiento recursivo. */
export default withStyles(styles)(ModalIndtrs);