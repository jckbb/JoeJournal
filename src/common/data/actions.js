export const actionTypes = {
  UPDATE_SETUP: 'update setup',
  UPDATE_PREP: 'update prep',
  UPDATE_STAGE: 'update stage',
  UPDATE_ALL: 'update all',
};

export const updatePrep = (data) => ({
  type: actionTypes.UPDATE_PREP,
  payload: data,
});

export const updateSetup = (id, data) => ({
  type: actionTypes.UPDATE_SETUP,
  id: id,
  payload: data,
});

export const updateStage = (data) => ({
  type: actionTypes.UPDATE_STAGE,
  payload: data,
});

export const updateAll = (data) => ({
  type: actionTypes.UPDATE_ALL,
  payload: data,
});
