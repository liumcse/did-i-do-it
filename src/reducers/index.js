const reducer = (state, action) => {
  const { applicationList } = state;
  switch (action.type) {
    case 'NEW_APPLICATION':
      return {
        ...state,
        applicationList: applicationList.concat(action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
