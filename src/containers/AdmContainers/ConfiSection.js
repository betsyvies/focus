import { connect } from 'react-redux';
import ConfiSection from '../../views/sections/AdmSection/ConfiSection';

const mapStateToProps = (state) => {
  return {
    html: state.inAdmReducer.html,
  }
};

export default connect(mapStateToProps)(ConfiSection);