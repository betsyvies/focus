import { connect } from 'react-redux';
import { updateHtml } from '../../actions/internalAdmActions';
import Configurations from '../../components/AdmComponents/Configurations';

const mapStateToProps = (state) => {
  return {
    html: state.inAdmReducer.html,
    jwt: state.user.jwt
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateHtml: html => dispatch(updateHtml(html)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Configurations);