import actionTypes from './actionTypes';

export const updateField = (name, data) => ({
  type: actionTypes.UPDATE_FIELD,
  field: name,
  payload: data,
});
