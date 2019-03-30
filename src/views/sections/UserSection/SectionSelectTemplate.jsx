import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ComplexButton from '../../../components/UserComponents/Buttons/ComplexButton';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginBottom: '2.5rem',
    marginTop: '2.5rem'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const SectionSelectTemplate = ({classes, images, idUser }) => (
  <div className={classes.flex}>
    <h1 className={classes.title}>Bienvenido al sistema</h1>
    <ComplexButton idUser={idUser} images={images}/>
  </div>
  );

SectionSelectTemplate.propTypes = {
  classes: PropTypes.object.isRequired,
};
  
export default withStyles(styles)(SectionSelectTemplate);
  