import {actionTypes} from './actions';

const initialStage = {
  waterAmount: {
    value: undefined,
    hasError: true,
  },
  pourDuration: {
    value: undefined,
    hasError: true,
  },
  waitDuration: {
    value: undefined,
    hasError: true,
  },
  description: {
    value: '',
    hasError: false,
  },
};

export const initialState = {
  stage: {
    0: initialStage,
  },
  totalWater: 0,
  totalTime: 0,
  stageByIndex: [0],
  selectedStage: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_TOTAL:
      return {
        ...state,
        totalWater: action.payload.totalWater,
        totalTime: action.payload.totalTime,
      };
    case actionTypes.UPDATE_FIELD:
      return {
        ...state,
        stage: {
          ...state.stage,
          [action.stageId]: {
            ...state.stage[action.stageId],
            [action.field]: {
              ...state.stage[action.stageId][action.field],
              value: action.payload,
              hasError: action.error,
            },
          },
        },
      };
    case actionTypes.ADD_STAGE:
      const stageId = state.stageByIndex[state.stageByIndex.length - 1] + 1;
      return {
        ...state,
        stage: {
          ...state.stage,
          [stageId]: initialStage,
        },
        stageByIndex: [...state.stageByIndex, stageId],
        selectedStage: stageId,
      };
    case actionTypes.REMOVE_STAGE:
      const {[action.stageId]: removedStage, ...freshStage} = state.stage;
      const freshStageByIndex = [...state.stageByIndex];
      freshStageByIndex.splice(state.stageByIndex.indexOf(action.stageId), 1);

      const stageIndex = state.stageByIndex.indexOf(action.stageId);
      const freshStageIndex = stageIndex - 1 < 0 ? stageIndex + 1 : stageIndex - 1;

      return {
        ...state,
        stage: freshStage,
        stageByIndex: freshStageByIndex,
        selectedStage: freshStageIndex,
      };
    case actionTypes.UPDATE_SELECTED_STAGE:
      return {
        ...state,
        selectedStage: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
