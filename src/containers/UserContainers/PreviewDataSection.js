import { connect } from 'react-redux';
import { getHtmlParser, changeStateLoader } from '../../actions/internalUserActions';
import PreviewDataSection from '../../views/sections/UserSection/PreviewDataSection';

const mapStateToProps = (state) => {
  return {
    htmlParser: state.inUserReducer.htmlParser,
    stateLoader: state.inUserReducer.stateLoader,
    html: state.inAdmReducer.html,
    jwt: state.user.jwt
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onGetHtmlParser: htmlParser => dispatch(getHtmlParser(htmlParser)),
    onChangeStateLoader: stateLoader => dispatch(changeStateLoader(stateLoader)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PreviewDataSection);