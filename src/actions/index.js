export const newApplication = input => {
  return {
    type: 'NEW_APPLICATION',
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
