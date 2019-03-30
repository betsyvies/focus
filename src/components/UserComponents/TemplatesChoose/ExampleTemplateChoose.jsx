import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FullWidthTabs from '../FullWidthTabs'

/* Estilos para el componente, se pasa como prop con el nombre classes */
const styles = theme => ({
  title: {
    textAlign: 'center',
    padding: '2rem',
    color: '#000'
  },
  cards: {
    textAlign: 'center',
    paddingLeft: '2rem',
    paddingRight: '2rem',
    width: '100%'
  }
});

const ExampleTemplateChoose = ({classes, onGetData, dataTable, onGetTpmlUser, dataTpmlUser, idUser}) =>(
  <div className="container">
    <div className="masonry-container">
      <h1 className={classes.title}>Escoge una plantilla</h1>
      <div className={classes.cards}>
        <FullWidthTabs onGetData={onGetData} dataTable={dataTable} onGetTpmlUser={onGetTpmlUser} dataTpmlUser={dataTpmlUser} idUser={idUser}/>
      </div>
    </div>
  </div>
);

ExampleTemplateChoose.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExampleTemplateChoose);