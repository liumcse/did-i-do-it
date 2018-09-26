const reducer = (state, action) => {
  const { applicationList } = state;
  switch (action.type) {
    case 'ADD_APPLICATION':
      const lastWeight =
        !applicationList || applicationList.length === 0
          ? 0
          : applicationList[applicationList.length - 1].weight;
      return {
        ...state,
        applicationList: applicationList.concat({
          ...action.payload,
          weight: lastWeight + 10,
        }),
      };
    case 'EDIT_APPLICATION':
      const updatedApplicationList = applicationList.slice();
      updatedApplicationList[action.payload.index] = action.payload.data;
      return {
        ...state,
        applicationList: updatedApplicationList,
      };
    case 'REMOVE_APPLICATION':
      const withDeletedApplicationList = applicationList.slice();
      withDeletedApplicationList.splice(action.payload.index, 1);
      return {
        ...state,
        applicationList: withDeletedApplicationList,
      };
    case 'SHOW_MODAL':
      return {
        ...state,
        modalType: action.payload.modalType,
        modalProps: action.payload.modalProps,
      };
    case 'HIDE_MODAL':
      return {
        ...state,
        modalType: null,
        modalProps: null,
      };
    default:
      return state;
  }
};

export default reducer;
