import { connect } from 'react-redux';
import SectionSelectTemplate from '../../views/sections/UserSection/SectionSelectTemplate';

const mapStateToProps = (state) => {
  return {
    images : state.inUserReducer.images,
    idUser: state.user._id,
  }
};

export default connect(mapStateToProps)(SectionSelectTemplate);