export const actionTypes = {
  UPDATE_FIELD: 'update field',
  UPDATE_ERROR: 'update error',
  ADD_SPLIT_ITEM: 'add split',
  DELETE_SPLIT_ITEM: 'delete split',
  UPDATE_SPLIT_FIELD: 'update split field',
};

export const updateField = (field, payload) => ({
  type: actionTypes.UPDATE_FIELD,
  field,
  payload,
});

export const updateSplitField = (field, payload, key) => ({
  type: actionTypes.UPDATE_SPLIT_FIELD,
  field,
  key,
  payload,
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
