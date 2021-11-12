export const actionTypes = {
  UPDATE_FIELD: 'update field',
  ADD_STAGE: 'add stage',
  REMOVE_STAGE: 'remove stage',
  UPDATE_SELECTED_STAGE: 'update selected stage',
  UPDATE_TOTAL: 'update total',
};

export const updateTotal = (timeData, waterData) => ({
  type: actionTypes.UPDATE_TOTAL,
  payload: {
    totalTime: timeData,
    totalWater: waterData,
  },
});

export const updateSelectedStage = (id) => ({
  type: actionTypes.UPDATE_SELECTED_STAGE,
  payload: id,
});

export const updateField = (id, name, data) => ({
  type: actionTypes.UPDATE_FIELD,
  stageId: id,
  field: name,
  error: data === undefined || data.length <= 0,
  payload: data,
});

export const addStage = () => ({
  type: actionTypes.ADD_STAGE,
});

export const removeStage = (id) => ({
  type: actionTypes.REMOVE_STAGE,
  stageId: id,
});
