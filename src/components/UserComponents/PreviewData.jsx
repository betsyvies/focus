import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ReactHtmlParser from 'react-html-parser';
import ReactLoading from 'react-loading';
/* eslint-disable no-unused-expressions */
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

class PreviewData extends Component {
  render() {
    const { html, styleWidth, stateLoader } = this.props;

    return <div style={styleWidth}>{ 
      !stateLoader ? 
        ReactHtmlParser(html)
        : <ReactLoading type={'bars'} color={'#44bfaa'} height={100} width={80} />  
    }</div>;
  }
}

PreviewData.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PreviewData);