export const addApplication = input => {
  return {
    type: 'ADD_APPLICATION',
    payload: {
      company: input.company,
      role: input.role,
      applyDate: input.applyDate,
      location: input.location,
      status: input.status,
      memo: input.memo,
    },
  };
};

export const editApplication = (index, data) => {
  return {
    type: 'EDIT_APPLICATION',
    payload: {
      index,
      data,
    },
  };
};

export const removeApplication = index => {
  return {
    type: 'REMOVE_APPLICATION',
    payload: {
      index,
    },
  };
};

export const showModal = (modalType, modalProps) => {
  return {
    type: 'SHOW_MODAL',
    payload: {
      modalType,
      modalProps,
    },
  };
};

export const hideModal = () => {
  return {
    type: 'HIDE_MODAL',
  };
};
