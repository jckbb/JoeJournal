import actionTypes from './actionTypes';

export const updateField = (name, data) => ({
  type: actionTypes.UPDATE_FIELD,
  field: name,
  error: data.length <= 0,
  payload: data,
});
