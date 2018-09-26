import React from 'react';
import { connect } from 'react-redux';
import EditApplication from '../components/modals/EditApplication';
import AddApplication from '../components/modals/AddApplication';

const ModalContainer = props => {
  switch (props.modalType) {
    case 'EDIT_APPLICATION':
      return <EditApplication {...props.modalProps} />;
    case 'ADD_APPLICATION':
      return <AddApplication {...props.modalProps} />;
    default:
      return null;
  }
};

const mapStateToProps = state => ({
  modalType: state.modalType,
  modalProps: state.modalProps, // for future use if need to pass props
});

export default connect(mapStateToProps)(ModalContainer);
