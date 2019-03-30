import { connect } from 'react-redux';
import { updateHtml, setView, getMethod, getIdEmail } from '../../actions/internalAdmActions';
import Editor from '../../components/AdmComponents/Preview/Editor';

const mapStateToProps = (state, ownProps) => {
  return {
    html: state.inAdmReducer.html,
    view: state.inAdmReducer.view,
    method: state.inAdmReducer.method
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onUpdateHtml: html => dispatch(updateHtml(html)),
    onSetView: view => dispatch(setView(view)),
    onGetMethod: method => dispatch(getMethod(method)),
    onGetIdEmail: idEmail => dispatch(getIdEmail(idEmail)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Editor);