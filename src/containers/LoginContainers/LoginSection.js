import { connect } from 'react-redux';
import LoginSection from '../../views/sections/LoginSection';

const mapStateToProps = (state, ownProps) => {
  return {
    name: state.name
  }
};

export default connect(mapStateToProps)(LoginSection);