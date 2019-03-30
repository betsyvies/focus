import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import blue from '@material-ui/core/colors/blue';
import amber from '@material-ui/core/colors/amber';
import teal from '@material-ui/core/colors/teal';
import grey from '@material-ui/core/colors/grey';
import Avatar from '@material-ui/core/Avatar';
import Icon from '@material-ui/core/Icon';
import ModalChange from './Modal/ModalChange'

const styles = theme => ({
  amberAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: amber[800],
    width: '30px',
    height: '30px',
    marginRight: 0
  },
  blueAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: blue[500],
    width: '30px',
    height: '30px',
  },
  tealAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: teal[300],
    width: '30px',
    height: '30px',
  },
  row: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  iconHover: {
    margin: theme.spacing.unit * 2,
    fontSize: '16px',
    '&:hover': {
      color: grey[300],
    },
  },
  link: {
    textDecoration: 'none',
    color: '#fff'
  }
});

class IconAvatars extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: ''
    };
  }

  handleModal = (dataTable, idTemp) => {
    var pathName = window.location.pathname;

    if ('/list-templates' === pathName) {
      return  <div className={this.props.classes.row}>
                <Link to={`/preview-section/` + this.props.id} className={this.props.classes.link}>
                  <Avatar className={this.props.classes.blueAvatar}>
                    <Icon className={this.props.classes.iconHover}>build</Icon>
                  </Avatar>
                </Link>
                <Link to={`/editor-section/` + this.props.id} className={this.props.classes.link}>
                  <Avatar className={this.props.classes.tealAvatar}>
                    <Icon className={this.props.classes.iconHover}>format_paint</Icon>
                  </Avatar>
                </Link>
                <ModalChange _idUser={this.props._idUser} jwt={this.props.jwt} idTemp={idTemp} dataTable={dataTable} onGetData={this.props.onGetData} onCreateData={this.props.onCreateData} id={this.props.id}/>
              </div>
    } else if ('/list-indicators' === pathName) {
      return  <div className={this.props.classes.row}>
                <Link to={`/confi-section/` + this.props.id} className={this.props.classes.link}>
                  <Avatar className={this.props.classes.blueAvatar}>
                    <Icon className={this.props.classes.iconHover}>build</Icon>
                  </Avatar>
                </Link>
                <ModalChange _idUser={this.props._idUser} jwt={this.props.jwt} idTemp={idTemp} dataTable={dataTable} onGetData={this.props.onGetData} onCreateData={this.props.onCreateData} id={this.props.id}/>
              </div>
    } else {
      return  <div>
                <ModalChange _idUser={this.props._idUser} jwt={this.props.jwt} idTemp={idTemp} dataTable={dataTable} onGetData={this.props.onGetData} onCreateData={this.props.onCreateData} id={this.props.id}/>
              </div>
    }
  }

  render() {
    const { dataTable, idTemp} = this.props;
    return (
      <div>
        {this.handleModal(dataTable, idTemp)}
      </div>
    );
  }
}

IconAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconAvatars);