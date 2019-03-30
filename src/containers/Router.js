import { connect } from 'react-redux';
import Router from '../render/Router';

function mapStateToProps(state,ownProps) {
  return {
    user: state.user
  }
}

export default connect( mapStateToProps )(Router)