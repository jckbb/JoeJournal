export const actionTypes = {
  UPDATE_FIELD: 'update field',
  UPDATE_FORM: 'update form',
};

export const updateField = (name, data) => ({
  type: actionTypes.UPDATE_FIELD,
  field: name,
  error: data === undefined || data.length <= 0,
  payload: data,
});

export const updateForm = (data) => ({
  type: actionTypes.UPDATE_FORM,
  payload: data,
});
