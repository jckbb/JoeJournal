export const actionTypes = {
  UPDATE_FIELD: 'update field',
};

export const updateField = (name, data) => ({
  type: actionTypes.UPDATE_FIELD,
  field: name,
  error: data === undefined || data.length <= 0,
  payload: data,
});
