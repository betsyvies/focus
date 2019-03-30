import { connect } from 'react-redux';
import { getMethod } from '../../actions/internalAdmActions';
import PreviewSection from '../../views/sections/AdmSection/PreviewSection';

const mapStateToProps = (state) => {
  return {
    html: state.inAdmReducer.html,
    method: state.inAdmReducer.method,
    idEmail: state.inAdmReducer.idEmail,
    jwt: state.user.jwt
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetMethod: method => dispatch(getMethod(method)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviewSection);