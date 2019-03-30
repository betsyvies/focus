import { connect } from 'react-redux';
import From from '../../views/sections/LoginSection/Form';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
  }
}

export default connect(mapStateToProps)(From)