import { connect } from 'react-redux';
import Content from '../../components/AdmComponents/Preview/HtmlParser';

const mapStateToProps = (state, ownProps) => {
  return {
    html: state.inAdmReducer.html,
  };
};

export default connect(
  mapStateToProps
)(Content);
