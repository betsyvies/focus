import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { getData } from '../../../request';
import { routes } from '../../../helper/formData'
import { modelData } from '../../../helper/models';
import SwipeableViews from 'react-swipeable-views';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabContainer from './TabContainer'
import Card from '../TemplatesChoose/Card'

const styles = theme => ({
  root: {
    backgroundColor: '#f2f1f2',
    width: '100%',
    position: 'relative',
  },
});

class FullWidthTabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      tab: 'Plantillas'
    };
  }

  componentWillMount = () => {
    let routeGene = routes('templates?type=generico', '')
    getData(routeGene)
    .then((templates) => {
      if (templates.success) {
        let dataTmplGene = []
        templates.data.docs.map(e => {
          dataTmplGene.push(e);
          let dataArr = modelData(dataTmplGene, 'tmplPret')
          return this.props.onGetData(dataArr)
        })
      } else {
        return 'err'
      }
    })

    let routeUser = routes('templates?user=', {idTemp: this.props.idUser})
    getData(routeUser)
    .then((templates) => {
      if (templates.success) {
        let dataTmplUser = []
        templates.data.docs.map(e => {
            dataTmplUser.push(e);
            let dataArr = modelData(dataTmplUser, 'tmplPret')
            return this.props.onGetTpmlUser(dataArr)
        })
      } else {
        return 'err'
      }
    })
  } 

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  render() {
    const { classes, theme, dataTable, dataTpmlUser } = this.props;
    const { tab, value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default" style={{ boxShadow: 'none' }}>
          <Tabs
            value={value}
            onChange={this.handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            fullWidth
          >
            <Tab label="Plantillas" onClick={(e) => {this.setState({ tab: 'Plantillas' })}}/>
            <Tab label="Mis plantillas" onClick={(e) => {this.setState({ tab: 'Mis plantillas' })}}/>
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={value}
          onChangeIndex={this.handleChangeIndex}
        >
          <TabContainer dir={theme.direction}>
            <Card dataTable={dataTable} dataTpmlUser={dataTpmlUser} tab={tab}/>
          </TabContainer>
          <TabContainer dir={theme.direction}>
            <Card dataTable={dataTable} dataTpmlUser={dataTpmlUser} tab={tab}/>
          </TabContainer>
        </SwipeableViews>
      </div>
    );
  }
}

FullWidthTabs.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(FullWidthTabs);