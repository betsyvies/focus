import { connect } from 'react-redux';
import AdmSelect from '../../views/sections/AdmSection/AdmSelect';

const mapStateToProps = (state) => {
  return {
    name: state.user.name
  }
};

export default connect(mapStateToProps)(AdmSelect);