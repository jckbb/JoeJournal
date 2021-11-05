import {actionTypes} from './ActionTypes';

export const updateField = (name, data) => ({
  type: actionTypes.UPDATE_FIELD,
  field: name,
  error: data.length <= 0,
  payload: data,
});

export const clearAllFields = () => ({
  type: actionTypes.DELETE_ALL_FIELDS,
});
