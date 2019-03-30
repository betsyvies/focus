import { connect } from 'react-redux';
import { getMethod, getIdEmail } from '../../actions/internalAdmActions';
import { changeDataAlert } from '../../actions/internalUserActions';
import EditorSection from '../../views/sections/UserSection/EditorSection';

const mapStateToProps = (state) => {
  return {
    nameTemplate: state.inUserReducer.nameTemplate,
    dataAlert: state.inUserReducer.dataAlert,
    html: state.inAdmReducer.html,
    method: state.inAdmReducer.method,
    idEmail: state.inAdmReducer.idEmail,
    idUser: state.user._id,
    role: state.user.role,
    jwt: state.user.jwt
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetMethod: method => dispatch(getMethod(method)),
    onGetIdEmail: idEmail => dispatch(getIdEmail(idEmail)),
    onChangeDataAlert: dataAlert => dispatch(changeDataAlert(dataAlert))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditorSection);