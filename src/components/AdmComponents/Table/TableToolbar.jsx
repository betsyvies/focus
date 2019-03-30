import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { deleteData, getData } from '../../../request';
import { modelData } from '../../../helper/models';
import { fromData, routes } from '../../../helper/formData';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import swal from 'sweetalert';

const pathName = window.location.pathname;
const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85),
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark,
      },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});

class EnhancedTableToolbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateTable: false,
    }
  }

  handleAlert = (jwt, ids) => {
    let nameList = window.location.pathname.split('-').pop()
    let name = this.selectName(nameList, ids)
    swal({
      title: "Esta seguro de eliminar " + name,
      buttons: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this.deleteTable(jwt, ids)
      }
    });
  }

  deleteTable = (jwt, ids) => {
    let idsString = ids.toString()
    const data = {
      ids: idsString
    }

    let newData = fromData(data)
    if ('/list-templates' === pathName) {
      let route = routes('templates', '')
      deleteData(newData, jwt, route).then(this.getData).catch(console.log);
    } else if ('/list-indicators' === pathName) {
      let route = routes('indicators', '')
      deleteData(newData, jwt, route).then(this.getData).catch(console.log);
    } else if ('/list-users' === pathName) {
      let route = routes('users', '')
      deleteData(newData, jwt, route).then(this.getData).catch(console.log);
    }
    
  }

  getDataList = (data, model) => {
    this.props.onGetSelected([])
    if (data.success) {
      if (data.data.docs.length > 0) {
        let newData = data.data.docs
        let dataArr = modelData(newData, model)
        return this.props.onGetData(dataArr)
      }
    }
  }

  getData = data => {
    if (data.success) {
      if ('/list-templates' === pathName) {
        let route = routes('templates', '')
        getData(route)
        .then((templates) => this.getDataList(templates, 'templates'))
      } else if ('/list-users' === pathName) {
        let route = routes('users', '')
        getData(route)
        .then((users) => this.getDataList(users, 'users'))
      } else if ('/list-indicators' === pathName) {
        let route = routes('indicators', '')
        getData(route)
        .then((indicator) => this.getDataList(indicator, 'indicators'))
      } else {
        return 'err'
      }
    } else {
      return 'err'
    }
  }

  selectName = (name, ids) => {
    switch (name) {
      case 'indicators':
      let indicator = ids.length > 1 ? 'los indicadores' : 'el indicador'
        return indicator;
      case 'users':
      let users = ids.length > 1 ? 'los usuarios' : 'el usuario'
        return users;
      case 'templates':
      let templates = ids.length > 1 ? 'las plantillas' : 'la plantilla'
        return templates;
      default:
        return 'other';
    }
  }

  render() {
    const { classes, ids, selected, jwt } = this.props;
    return (
      <Toolbar
        className={classNames(classes.root, {
          [classes.highlight]: selected > 0,
        })}
      >
        <div className={classes.title}>
          {selected > 0 ? (
            <Typography color="inherit" variant="subtitle1">
              {selected} seleccionado
            </Typography>
          ) : (
              <Typography variant="h6" id="tableTitle">
                Listado
              </Typography>
            )}
        </div>
        <div className={classes.spacer} />
        <div className={classes.actions}>
          {selected > 0 ? (
            <div onClick={(e) => { this.handleAlert(jwt, ids) }}>
              <Tooltip title="Delete">
                <IconButton aria-label="Delete">
                  <DeleteIcon />
                </IconButton>
              </Tooltip>
            </div>
          ) : (
              <Tooltip title="Filter list">
                <IconButton aria-label="Filter list">
                  <FilterListIcon />
                </IconButton>
              </Tooltip>
            )}
        </div>
      </Toolbar>
    );
  };
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
  selected: PropTypes.number.isRequired,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

export default EnhancedTableToolbar;