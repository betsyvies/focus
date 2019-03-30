import { connect } from 'react-redux';
import { getData, getTpmlUser } from '../../actions/internalUserActions';
import GetTemplates from '../../views/sections/UserSection/GetTemplates';

const mapStateToProps = (state) => {
  return {
    dataTable: state.inUserReducer.dataTable,
    dataTpmlUser: state.inUserReducer.dataTpmlUser,
    idUser: state.user._id
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetData: dataTable => dispatch(getData(dataTable)),
    onGetTpmlUser: dataTpmlUser => dispatch(getTpmlUser(dataTpmlUser)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GetTemplates);