import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { getData } from '../../../request';
import { routes } from '../../../helper/formData'
import { modelData } from '../../../helper/models'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import IconAvatars from '../IconAvatars'
import Paper from '@material-ui/core/Paper';
import Label from '../Label';
import EnhancedTableToolbar from './TableToolbar';
import EnhancedTableHead from './TableHead'

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
    padding: '2rem'
  },  
});

const theme = {
  width: '95.5%',
  display: 'inline-block',
  marginRight: '2rem',
  marginLeft: '1.6rem'
}

class EnhancedTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: 'asc',
      orderBy: 'Template',
      selected: [],
      page: 0,
      rowsPerPage: 5,
      id: ''
    };
  }

  componentWillMount = () => {
    var pathname = window.location.pathname;

    const getDataList = (data, model) => {
      if (data.success) {
        if (data.data.docs.length > 0) {
          let newData = data.data.docs
          let dataArr = modelData(newData, model)
          return this.props.onGetData(dataArr)
        }
      }
    }

    if ('/list-templates' === pathname) {
      let route = routes('templates', '')
      getData(route)
      .then((templates) => getDataList(templates, 'templates'))
    } else if ('/list-users' === pathname) {
      let route = routes('users', '')
      getData(route)
      .then((users) => getDataList(users, 'users'))
    } else if ('/list-indicators' === pathname) {
      let route = routes('indicators', '')
      getData(route)
      .then((indicator) => getDataList(indicator, 'indicators'))
    } else {
      return 'err'
    }
    this.props.onGetSelected([])
  }

  handleRequestSort = (event, property) => {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }

    this.setState({ order, orderBy });
  };

  handleClick = (event, id) => {
    const { selected } = this.props;
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    this.props.onGetSelected(newSelected);
    this.setState({ id });
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: event.target.value });
  };

  isSelected = id => this.props.selected.indexOf(id) !== -1;

  render() {
    const { classes, columnData, dataTable, onCreateData, onGetSelected, selected, onGetData, _idUser, jwt } = this.props;
    const { order, orderBy, rowsPerPage, page, id} = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, dataTable.length - page * rowsPerPage);

    return (
      <Paper className={classes.root} style={theme}>
        <EnhancedTableToolbar _idUser={_idUser} onGetData={onGetData} onGetSelected={onGetSelected} selected={selected.length} onCreateData={onCreateData} ids={selected} jwt={jwt} />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead
              columnData={columnData}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
              rowCount={dataTable.length}
            />
            <TableBody>
              {dataTable
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(n => {
                  const isSelected = this.isSelected(n._id);
                  return (
                    <TableRow
                      hover
                      onClick={event => this.handleClick(event, n._id)}
                      role="checkbox"
                      aria-checked={isSelected}
                      tabIndex={-1}
                      key={n._id}
                      selected={isSelected}
                    >
                      <TableCell component="th" scope="row" padding="none">
                        {n.name}
                      </TableCell>
                      {n.table.map((cell) => {
                        return (
                          <TableCell key={cell} numeric>
                            {cell}
                          </TableCell>
                        )
                      })}
                      <TableCell numeric><IconAvatars _idUser={_idUser} dataTable={dataTable} onGetData={onGetData} onCreateData={onCreateData} idTemp={id} jwt={jwt} id={n._id}/></TableCell>
                      <TableCell numeric><Label val={n.state}/></TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={dataTable.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}

EnhancedTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnhancedTable);