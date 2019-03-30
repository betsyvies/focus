import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExampleTemplateChoose from '../../../components/UserComponents/TemplatesChoose/ExampleTemplateChoose';

const styles = {
  height: {
    height: '100vh',
  },
};

const GetTemplates = ({classes, onGetData, dataTable, onGetTpmlUser, dataTpmlUser, idUser}) => (
  <div className={classes.height}>
    <ExampleTemplateChoose onGetData={onGetData} dataTable={dataTable} onGetTpmlUser={onGetTpmlUser} dataTpmlUser={dataTpmlUser} idUser={idUser}/>
  </div>
);

GetTemplates.propTypes = {
  classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(GetTemplates);