export const actionTypes = {
  UPDATE_EVALUATE_FORM_FIELD: 'update evaluate form field',
};

export const updateField = (field, data) => ({
  type: actionTypes.UPDATE_EVALUATE_FORM_FIELD,
  field,
  payload: data,
});
