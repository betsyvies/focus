import { connect } from 'react-redux';
import Navigation from '../../components/NavComponents/Navigation';

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(Navigation)