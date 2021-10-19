import {actionTypes} from './ActionTypes';

export const updateField = (name, data) => ({
  type: actionTypes.UPDATE_FIELD,
  field: name,
  payload: data,
});

export const updateFieldError = (name, error) => ({
  type: actionTypes.UPDATE_FIELD,
  field: name,
  hasError: error,
});
