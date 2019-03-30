import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Header from '../../../components/AdmComponents/Header';
import Table from '../../../components/AdmComponents/Table'

const styles = {
  height: {
    height: '90vh',
  },
  table: {
    marginLeft: '1rem',
    marginRight: '1rem',
  }
};

const ListsSections = ({ classes, _idUser, columnData, nameView, onGetSelected, onCreateData, onGetData, dataTable, selected, jwt, role }) => (
  <div className={classes.height}>
    <Header nameView={nameView} onGetData={onGetData} _idUser={_idUser} jwt={jwt} dataTable={dataTable} role={role}/>
    <Table className={classes.table} columnData={columnData} onGetSelected={onGetSelected} selected={selected} onCreateData={onCreateData} _idUser={_idUser} jwt={jwt} dataTable={dataTable} onGetData={onGetData}/>
  </div>
);

ListsSections.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ListsSections);