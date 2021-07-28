export const actionTypes = {
  UPDATE_FIELD: 'update field',
  UPDATE_ERROR: 'update error',
  ADD_SPLIT_ITEM: 'add split',
  DELETE_SPLIT_ITEM: 'delete split',
  UPDATE_SPLIT_FIELD: 'update split field',
};

export const updateField = (field, data) => ({
  type: actionTypes.UPDATE_FIELD,
  field,
  payload: {
    value: data,
    hasError: data === undefined || data.length < 0,
    error: '',
  },
});

export const updateSplitField = (field, data, index) => ({
  type: actionTypes.UPDATE_SPLIT_FIELD,
  field,
  index,
  payload: {
    value: data,
    hasError: data === undefined || data.length < 0,
    error: '',
  },
});

export const updateError = (field, payload) => ({
  type: actionTypes.UPDATE_FIELD,
  field,
  payload,
});

export const addSplitItem = () => ({
  type: actionTypes.ADD_SPLIT_ITEM,
});

export const removeSplitItem = (payload) => ({
  type: actionTypes.DELETE_SPLIT_ITEM,
  payload,
});
