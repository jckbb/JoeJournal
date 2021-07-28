import {actionTypes} from './actions';

const initialSplitState = {
  stage: {
    hasError: true,
    error: '',
    value: '',
  },
  duration: {
    hasError: true,
    error: '',
    value: 0,
  },
  waterAmount: {
    hasError: true,
    error: '',
    value: 0,
  },
};

export const initialState = {
  roaster: {
    hasError: true,
    error: '',
    value: '',
  },
  region: {
    hasError: true,
    error: '',
    value: '',
  },
  brewMethod: {
    hasError: true,
    error: '',
    value: '',
  },
  grinder: {
    hasError: true,
    error: '',
    value: undefined,
  },
  dial: {
    hasError: true,
    error: '',
    value: 0,
  },
  coffeeAmount: {
    hasError: true,
    error: '',
    value: 0,
  },
  waterTemperature: {
    hasError: true,
    error: '',
    value: 0,
  },
  brewSplits: [initialSplitState],
};

const formReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_FIELD:
      return {
        ...state,
        [action.field]: action.payload,
      };
    case actionTypes.ADD_SPLIT_ITEM:
      return {
        ...state,
        brewSplits: [...state.brewSplits, initialSplitState],
      };
    case actionTypes.DELETE_SPLIT_ITEM:
      const mutatedBrewSplits = [...state.brewSplits];
      mutatedBrewSplits.pop();

      return {
        ...state,
        brewSplits: mutatedBrewSplits,
      };
    case actionTypes.UPDATE_SPLIT_FIELD:
      return {
        ...state,
        brewSplits: [...state.brewSplits].map((data, index) => {
          if (action.index !== index) return data;

          return {
            ...data,
            [action.field]: action.payload,
          };
        }),
      };
    default:
      return state;
  }
};

export default formReducer;
