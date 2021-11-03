export const actionTypes = {
  UPDATE_BREW: 'update brew',
  DELETE_BREW: 'delete brew',
};

export const deleteBrew = () => ({
  type: actionTypes.DELETE_BREW,
});

export const updateBrew = (id, data) => ({
  type: actionTypes.UPDATE_BREW,
  id: id,
  payload: data,
});
