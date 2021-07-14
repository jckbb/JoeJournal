export const actionTypes = {
  UPDATE_FIELD: 'update field',
  UPDATE_ERROR: 'update error',
  ADD_SPLIT_ITEM: 'add split',
  DELETE_SPLIT_ITEM: 'delete split',
  UPDATE_SPLIT_FIELD: 'update split field',
};

const initialSplitState = {
  stage: undefined,
  duration: 0,
  waterAmount: 0,
};

const initialErrorSplitState = {
  stageName: {
    hasError: false,
  },
  duration: {
    hasError: false,
  },
  waterAmount: {
    hasError: false,
  },
};

export const initialState = {
  error: {
    roastName: {
      hasError: false,
    },
    brewMethod: {
      hasError: false,
    },
    grinder: {
      hasError: false,
    },
    dial: {
      hasError: false,
    },
    waterTemperature: {
      hasError: false,
    },
    waterAmount: {
      hasError: false,
    },
    coffeeAmount: {
      hasError: false,
    },
    split_0: initialErrorSplitState,
  },
  data: {
    roastName: undefined,
    brewMethod: undefined,
    grinder: undefined,
    dial: 0,
    coffeeAmount: 0,
    waterTemperature: 0,
    splitData: {
      split_0: initialSplitState,
    },
    splitByIndex: ['split_0'],
  },
};

const formReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_ERROR:
      return {
        ...state,
        error: {
          ...state.error,
          [action.field]: {
            hasError: action.payload,
          },
        },
      };
    case actionTypes.UPDATE_FIELD:
      return {
        ...state,
        error: {
          ...state.error,
          [action.field]: {
            hasError: false,
          },
        },
        data: {
          ...state.data,
          [action.field]: action.payload,
        },
      };
    case actionTypes.ADD_SPLIT_ITEM:
      const index = state.data.splitByIndex.length;
      const splitKey = `split_${index}`;

      return {
        ...state,
        error: {
          ...state.error,
          [splitKey]: initialErrorSplitState,
        },
        data: {
          ...state.data,
          splitData: {
            ...state.data.splitData,
            [splitKey]: initialSplitState,
          },
          splitByIndex: [...state.data.splitByIndex, splitKey],
        },
      };
    case actionTypes.DELETE_SPLIT_ITEM:
      const {[action.payload]: __, ...mutatedSplitData} = {
        ...state.data.splitData,
      };
      const {[action.payload]: poppedError, ...mutatedError} = {
        ...state.error,
      };
      const mutatedSplitsByIndex = [...state.data.splitByIndex];
      mutatedSplitsByIndex.pop();

      return {
        ...state,
        error: mutatedError,
        data: {
          ...state.data,
          splitData: mutatedSplitData,
          splitByIndex: mutatedSplitsByIndex,
        },
      };
    case actionTypes.UPDATE_SPLIT_FIELD:
      return {
        ...state,
        data: {
          ...state.data,
          splitData: {
            ...state.data.splitData,
            [action.key]: {
              ...state.data.splitData[action.key],
              [action.field]: action.payload,
            },
          },
        },
      };
    default:
      return state;
  }
};

export default formReducer;
