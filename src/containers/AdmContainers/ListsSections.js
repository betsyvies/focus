import { connect } from 'react-redux';
import { createData, getData, getSelected } from '../../actions/internalAdmActions';
import ListsSections from '../../views/sections/AdmSection/ListsSections';

const mapStateToProps = (state) => {
  return {
    data: state.inAdmReducer.data,
    columnData: state.inAdmReducer.columnData,
    nameView: state.inAdmReducer.nameView,
    dataTable: state.inAdmReducer.dataTable,
    selected: state.inAdmReducer.selected,
    _idUser: state.user._id,
    role: state.user.role,
    jwt: state.user.jwt
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCreateData: data => dispatch(createData(data)),
    onGetData: dataTable => dispatch(getData(dataTable)),
    onGetSelected: selected => dispatch(getSelected(selected))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ListsSections);