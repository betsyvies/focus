import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { putData, getData } from '../../request';
import { fromData, routes } from '../../helper/formData';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import classNames from 'classnames';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';

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

const styles = {
  height: {
    height: '100vh',
    background: '#f4f3f4',
    textAlign: 'center'
  },
  containerInput: {
    display: 'inline-block'
  },
  title: {
    textAlign: 'left',
    fontSize: '0.9rem'
  },
  container: {
    border: '2px solid #000',
    width: '25rem',
    paddingTop: '1.5rem'
  },
  input: {
    width: '90%',
    marginBottom: '2rem',
    fontSize: '0.9rem'
  },
  titleInput: {
    display: 'inline-block',
    width: '90%',
    textAlign: 'left',
    fontSize: '0.9rem'
  },
  containerButton: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '80%',
    marginTop: '2rem'
  },
  buttonSave: {
    background: '#eca549',
    color: '#fff',
    marginLeft: '1rem',
    marginRight: '1rem',
    heigth: '1rem'
  }
};

const theme = {
  input: {
    width: '25rem',
    marginBottom: '2rem',
    fontSize: '0.9rem !important',
    textAlign: 'left'
  },
  titleConfi: {
    marginBottom: '1rem'
  },
  menuItem: {
    fontSize: '0.9rem',
    textAlign: 'left'
  }
};

class Configurations extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      type: '',
      multiline: '',
      name: '',
      var: '',
      select: '',
      label: '',
      attr: [],
    };
    this.showData = this.showData.bind(this);
    this.changeConfi = this.changeConfi.bind(this);
    this.handleAlert = this.handleAlert.bind(this)
  }

  componentWillMount = () => {
    let route = routes('indicators', '')
    getData(route)
    .then((indicator) => {
      this.getDataSate(indicator)
    })
  }

  getDataSate = (indicator) => {
    var pathname = window.location.pathname;
    var arrPath = pathname.split('/');
    var id = arrPath.pop()
    if (indicator.success) {
      indicator.data.docs
        .filter(elem => id === elem._id)
        .map(elem => this.updateHtml(elem))
    }
  }

  updateHtml = (elem) => {
    this.setState({id: elem._id})
    this.setState({select: elem.selector})
    this.setState({name: elem.name})
    this.setState({var: elem.variable})
    this.setState({type: elem.type})
    this.setState({multiline: elem.description})

    if (elem.configuration !== '') {
      const dataConfi = JSON.parse(elem.configuration)
      this.setState({label: dataConfi.label})
      this.setState({attr: dataConfi.attributes.class})
      if ('Image' === dataConfi.label) {
        var string = `${dataConfi.content.type + ',' + dataConfi.content.style.color+ ',' + dataConfi.content.activeOnRender}`
        return this.props.onUpdateHtml(string);
      } else {
        return this.props.onUpdateHtml(dataConfi.content);
      }
    }
  }

  handleAlert = (html, jwt) => {
    swal({
      title: "Esta seguro de guardar la variable " + this.state.name,
      buttons: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.changeConfi(html, jwt)
      }
    });
  }

  changeConfi(html, jwt) {
    var  attr = [], img = []
    attr = {
      class: this.state.attr
    }

    if ('Image' === this.state.label) {
      var arrHtml = html.split(',')
      img = {
        type: arrHtml[0],
        style: { color: arrHtml[1] },
        activeOnRender: arrHtml[2]
      }
      this.showData(attr, img, jwt);
    } else {
      this.showData(attr, html, jwt);
    }
  }

  showData = (attr, newHtml, jwt) => {
    const data = {
      id: this.state.id,
      name: this.state.name,
      selector: this.state.select,
      variable: this.state.var,
      type: this.state.type,
      description: this.state.multiline,
      configuration: JSON.stringify({label: this.state.label, attributes: attr, content: newHtml})
    }
    let newData = fromData(data)
    let route = routes('indicators', this.state.id)

    putData(newData, jwt, route).then(response => {
      if(response.success) {
        NotificationManager.success('El indicador fue guardado con éxito');
      } else {
        NotificationManager.warning('Se ha producido un error');
      }
    })
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    const { classes, html, jwt } = this.props;
    return (
      <div className={classes.height}>
        <div className={classes.containerInput}>
          <Typography variant="h6" className={classes.title}>
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
        </div>
        <div className={classes.containerInput}>
          <Typography variant="h6" className={classes.title}>
            Selector
          </Typography>
          <Input
            type={'text'}
            onChange={this.handleChange('select')}
            value={this.state.select}
            ref="select"
            className={classNames(classes.margin, classes.textField)}
            style={theme.input}
          />
        </div>
        <div className={classes.containerInput}>
          <Typography variant="h6" className={classes.title}>
            Variable
          </Typography>
          <Input
            type={'text'}
            multiline
            rowsMax="4"
            onChange={this.handleChange('var')}
            value={this.state.var}
            ref="var"
            className={classes.textField}
            style={theme.input}
          />
        </div>
        <div className={classes.containerInput}>
          <Typography variant="h6" className={classes.title}>
            Tipo
          </Typography>
          <TextField
            select
            value={this.state.type}
            onChange={this.handleChange('type')}
            style={theme.input}
          >
            {ranges.map(option => (
              <MenuItem key={option.value} value={option.value} style={theme.menuItem}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
        <div className={classes.containerInput}>
          <Typography variant="h6" className={classes.title}>
            Descripción 
          </Typography>
          <Input
            type={'text'}
            multiline
            rowsMax="4"
            value={this.state.multiline}
            onChange={this.handleChange('multiline')}
            ref="multiline"
            className={classes.textField}
            style={theme.input}
            margin="normal"
          />
        </div>
        <div className={classes.containerInput}>
          <Typography variant="h6" className={classes.title} style={theme.titleConfi}>
            Configuración
          </Typography>
          <div className={classes.container}>
            <Typography variant="h6" className={classes.titleInput}>
              Etiqueta
            </Typography>
            <Input
              type={'text'}
              className={classes.input}
              value={this.state.label}
              onChange={this.handleChange('label')}
            />
            <Typography variant="h6" className={classes.titleInput}>
              Atributos
            </Typography>
            <Input
              type={'text'}
              className={classes.input}
              value={this.state.attr}
              onChange={this.handleChange('attr')}
              ref="attr"
            />
          </div>

        </div>
        <div className={classes.containerButton}>
          <Button variant="contained" className={classes.buttonSave} onClick={(e) => {this.handleAlert(html,  jwt)}}>
            Guardar
          </Button>
          <NotificationContainer/>
        </div>
      </div>
    );
  }
}

Configurations.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Configurations);