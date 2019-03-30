import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/AddCircleOutline';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

/* Estilos para el componente, se pasa como prop con el nombre classes */
const styles = {
  root: {
    width: '100%',
  },
  button: {
    backgroundColor: '#dddde2',
    margin: '0.3rem'
  },
  icon: {
    marginLeft: '0.5rem',
    marginRight: '0.5rem',
    fontSize: '1rem',
    display: 'flex'
  }
};

/* Renderiza los tags guardados */
class PositionedTooltips extends React.Component {
  state = {
    array: this.props.array
  };

  render() {
    const { classes } = this.props;
    
    return (
      <div className={classes.root}>
        <Grid>
          <Grid item>
          {this.state.array.length > 0 ? 
            this.state.array.map(tooltipValue => (
              <Tooltip key={tooltipValue} id="tooltip-top-start" title={tooltipValue} placement="top-start">
                <Button className={classes.button} >
                  <span onClick={(e) => {this.returnTag(tooltipValue)}} >
                    <AddIcon className={classes.icon}/>
                  </span>
                  {tooltipValue}
                  <span onClick={(e) => {this.handleCloseIcon(tooltipValue)}}>
                    <ClearIcon className={classes.icon}/>
                  </span>
                </Button>
              </Tooltip>
            )) : console.log('error') 
          }
         </Grid>
        </Grid>
      </div>
    );
  }
}

PositionedTooltips.propTypes = {
  classes: PropTypes.object.isRequired,
  array: PropTypes.arrayOf(PropTypes.shape({
    tags: PropTypes.string.isRequired,
  }).isRequired).isRequired
};

export default withStyles(styles)(PositionedTooltips);