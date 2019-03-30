import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { getData, postData, putData, postDataText } from '../../request';
import { fromData, routes, nameTempl } from '../../helper/formData';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { modelData } from '../../helper/models';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Select from './Select'
import swal from 'sweetalert'
/* eslint-disable no-unused-expressions */
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
  }, 
  link: {
    textDecoration: 'none',
    color: '#fff'
  },
  container: {
    width: '100%',
    margin: 0
  }
});

class Filters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dataId: {},
      dataDesk: [],
      dataTran: [],
      dataTemp: {},
      company: '',
      desktop: '',
      tracing: ''
    };
    this.getDataState = this.getDataState.bind(this);
  }

  componentWillMount = () => {
    let route = routes('erp/company', '')
    getData(route).then((company) => {
      this.props.textButton !== 'Actualizar' ? company.data.unshift({id:0, name:'SELECCIONE'}) : company.data
      company.success ? this.setState({data: company.data}) : this.setState({dataDesk: [{id: 0, name: 'NO TIENE EMPRESAS'}]})
    });

    if(this.props.dataTemp !== undefined ) {
      this.props.dataTemp
      .filter(elem => this.props.idTemp === elem._id)
      .map(elem => this.changeState(elem))
    } else {
      'err'
    }
  }

  changeState = (elem) => {
    if(elem.type !== 'generico') {
      this.setState({dataId: {idComp: elem.company.id, idDesk: elem.desktop.id, idFeed: elem.feed.id}})
      this.setValue('company',elem.company.id, '')
      this.setValue('desktop',elem.desktop.id, elem.company.id)
      this.setValue('tracing',elem.feed.id, '')
    }
  }

  showDesktop = id => {
    let route = routes('erp/desktop', id)
    console.log(id, this.state.dataId.idComp)
    if (id === this.state.dataId.idComp) {
      getData(route).then((desktop) => {
        desktop.success ? this.setState({dataDesk: desktop.data}) : this.setState({dataDesk: [{id: 0, name: 'NO TIENE ESCRITORIOS'}]})
      })
    } else {
      getData(route).then((desktop) => {
        desktop.data.unshift({id:0, name:'SELECCIONE'})
        desktop.success ? this.setState({dataDesk: desktop.data}) : this.setState({dataDesk: [{id: 0, name: 'NO TIENE ESCRITORIOS'}]})
      })
    }
  }

  showTracing = (idDesk, idComp) => {
    let data = { comp: idComp !== '' ? idComp : this.state.company , desk: idDesk}
    let route = routes('erp/feed', data)

    if (idDesk === this.state.dataId.idDesk) {
      getData(route).then((tracing) => {
        tracing.success ? this.setState({dataTran: tracing.data}) : this.setState({dataTran: [{id: 0, name: 'NO TIENE SEGUIMIENTOS'}]})
      })
    } else {
      getData(route).then((tracing) => {
        tracing.data.unshift({id:0, name:'SELECCIONE'})
        tracing.success ? this.setState({dataTran: tracing.data}) : this.setState({dataTran: [{id: 0, name: 'NO TIENE SEGUIMIENTOS'}]})
      })
    }
  }

  getDataState = data => {
    if (data.success) {
      NotificationManager.success('Se guardo con éxito');
      
      this.props.role === 'USER_ROLE' ? 
        this.props.method === 'post' ? this.props.onChangeDataAlert({open: true, id:data.data._id}) : 'err'
        : 'err'
    
      let route = routes('templates', '')
      getData(route)
      .then(templates => {
        if (templates.success) {
          let data = templates.data.docs
          let dataArr = modelData(data, 'templates')
          return this.props.onGetData(dataArr)
        }
      }).catch(console.log);
    } else {
      NotificationManager.warning('Se ha producido un error');
    }
  }

  requestTable = (jwt, name, type, _idUser) => {
    let $ = this.props
    let newName = nameTempl($.dataTemp, name, $.idTemp, $.method)
    if (newName !== 'other') {
      const data = {
        name: name,
        type: type,
        user: this.props._idUser,
      }
  
      type === 'generico' ? data : this.addFilters(data)   
      let newData = fromData(data)
      let route = routes('templates', '')
    
      postData(newData, jwt, route)
        .then(response => {
          this.getDataState(response)
        }
        ).catch(err => {
          NotificationManager.warning('Se ha producido un error');
        });
    } else {
      swal({
        title: "Cambie el nombre de su plantilla",
        text: "El nombre que desea usar ya existe",
        icon: "warning",
      })
    }
  }

  addFilters = (data) => {
    var $ = this.props
    data.company = `${this.state.company}, ${this.state.nameComp}`
    data.desktop = `${this.state.desktop}, ${this.state.nameDesk}`
    data.feed = `${this.state.tracing}, ${this.state.nameTra}`

    this.props.role !== 'USER_ROLE' ? data : data.file = new Blob([$.sendTemplate($.html, $.name, $.jwt, $.role)], { type: "txt/html" })

    return data
  }

  changeTable = (jwt, name, type, _idUser) => {
    let $ = this.props
    let newName = nameTempl($.dataTemp, name, $.idTemp, $.method)

    if (newName !== 'other') {
      const data = {
        name: name,
        type: type,
        user: _idUser,
        id: this.props.id
      }
  
      type === 'generico' ? data :  this.addFilters(data)  
  
      let newData = fromData(data)
      let route = routes('templates', this.props.idTemp)
  
      putData(newData, jwt, route)
        .then(this.getDataState)
        .catch(err=>{
          console.log(err);
        });
    } else {
      swal({
        title: "Cambie el nombre de su plantilla",
        text: "El nombre que desea usar ya existe",
        icon: "warning",
      })
    }
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClick = (val, jwt, name, type, _idUser, method) => {
    if (val === 'Probar') {
      let pathname = window.location.pathname;
      let arrPath = pathname.split('/');
      let id = arrPath.pop()

      const data = {
        template: id,
        desktop: `${this.state.desktop}`,
        feed: `${this.state.tracing}`
      }

      let newData = fromData(data)
      let route = routes('sendEmail/preview', '')
      this.props.onChangeStateLoader(true)

      postDataText(newData, jwt, route)
      .then((table) => {
        this.props.onChangeStateLoader(false)
        this.props.onGetHtmlParser(table)
      })    
    } else { 
      if (method === 'post') {
        this.requestTable(jwt, name, type, _idUser) 
      } else {
        this.changeTable(jwt, name, type, _idUser); 
      }
      this.props.handleClose(false)
    }
  }

  setValue = (name, value, idComp) => {
    this.setState({[name]: value});
    this.showDataFilters(name, value, idComp)
  }

  showDataFilters = (name, value, idComp) => {
    switch (name) {
      case 'company':
        this.getNameFilter(this.state.data, value, 'nameComp')
        return this.showDesktop(value);
      case 'desktop':
        this.getNameFilter(this.state.dataDesk, value, 'nameDesk')
        return this.showTracing(value, idComp);
      case 'tracing':
      return  this.getNameFilter(this.state.dataTran, value, 'nameTra')
      default:
        return 'err';
    }
  }

  getNameFilter = (data, id, val) => {
    data
      .filter(e => e.id === parseInt(id))
      .map(e => this.setState({[val]: e.name}))
  }

  render() {
    const { classes, _idUser, method, jwt, type, name, styleInput, styleBox, textButton } = this.props;
    const { company, desktop, tracing} = this.state;

    return(
      <div style={styleBox}>
        {type === 'personalizado' ? 
        <div>
          <Typography variant="h6" id="company">Empresa</Typography>
          <Select options={this.state.data} setValue={this.setValue} name={'company'} style={styleInput} value= {company}/>
          <Typography variant="h6" id="desktop">Escritorio</Typography>
          <Select options={this.state.dataDesk} setValue={this.setValue} name={'desktop'} style={styleInput} value= {desktop}/>
          <Typography variant="h6" id="tracing">Seguimiento</Typography>
          <Select options={this.state.dataTran} setValue={this.setValue} name={'tracing'} style={styleInput} value= {tracing}/>
        </div> 
        : <div></div>
        }
        <Button 
          variant="outlined" 
          size="small"
          color="primary" 
          className={classes.button} 
          onClick={(e) => { this.handleClick(textButton, jwt, name, type, _idUser, method)}}
        >
          {textButton}
        </Button>
        <NotificationContainer/>
      </div>
    );
  }
}

Filters.propTypes = {
  classes: PropTypes.object.isRequired,
};

/* Necesitamos una variable intermedia para manejar el anidamiento recursivo. */
export default withStyles(styles)(Filters);