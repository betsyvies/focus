import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { getData , postDataText } from '../../../request';
import { fromData, routes } from '../../../helper/formData';
import HeaderPreviewSection from '../../../components/UserComponents/Header/HeaderPreviewSection';
import PreviewData from '../../../components/UserComponents/PreviewData';
import Filters from '../../../components/AdmComponents/Filters'

const styles = {
  height: {
    height: '90vh',
  },
  containerFilter: {
    display: 'flex'
  },
  filter: {
    width: '30%',
    backgroundColor: '#fff',
    marginTop: '2rem',
    marginLeft: '2rem',
    marginRight: '2rem',
    padding: '3rem',
  },
  input: {
    width: '100%',
    marginBottom: '2rem'
  },
  widthMax: {
    width: '100%',
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: '80vh',
    overflowY: 'auto'
  },
  widthMin: {
    width: '64%',
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    height: '80vh',
    overflowY: 'auto'
  }
};
/* eslint-disable no-unused-expressions */
class PreviewDataSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textButton: 'Probar',
      type: 'generico'
    };
  }

  componentWillMount = () => {
    var pathname = window.location.pathname;
    var arrPath = pathname.split('/');
    var id = arrPath.pop()

    const data = {
      template: id,
    }
    let newData = fromData(data)
    let route = routes('sendEmail/preview', '')
    this.props.onChangeStateLoader(true)
    postDataText(newData, this.props.jwt, route)
    .then((table) => {
      this.props.onChangeStateLoader(false)
      this.props.onGetHtmlParser(table)
    })

    let routeTemp = routes('templates', '')
    getData(routeTemp)
    .then((data) => {
      data.success ? 
        data.data.docs
          .filter(elem => elem._id === id)
          .map(elem => this.setState({type: elem.type})) 
      : 'err'
    })
  }

  render() {
    const { classes, jwt, onGetHtmlParser, htmlParser, onChangeStateLoader, stateLoader } = this.props
    const { textButton, type } = this.state

    return (
      <div className={classes.height}>
        <HeaderPreviewSection html={htmlParser} jwt={jwt}/>
        <div className={classes.containerFilter}>
        {
          type === 'generico' ?
            <Filters textButton={textButton} onGetHtmlParser={onGetHtmlParser}  onChangeStateLoader={onChangeStateLoader} jwt={jwt} type={'personalizado'} styleInput={styles.input} styleBox={styles.filter}/>
          : <div></div> 
        }
          <PreviewData html={htmlParser} stateLoader={stateLoader} styleWidth={type === 'generico' ? styles.widthMin : styles.widthMax}/>
        </div>
      </div>
    );
  }
}

PreviewDataSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PreviewDataSection);