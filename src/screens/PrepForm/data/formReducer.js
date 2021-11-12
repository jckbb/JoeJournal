import {actionTypes} from './actions';

export const initialState = {
  dial: {
    value: 1,
    hasError: false,
  },
  waterTemperature: {
    value: undefined,
    hasError: true,
  },
  coffeeAmount: {
    value: undefined,
    hasError: true,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_FIELD:
      return {
        ...state,
        [action.field]: {
          ...state[action.field],
          value: action.payload,
          hasError: action.error,
        },
      };
    case actionTypes.UPDATE_FORM:
      return {
        ...state,
        dial: {
          value: action.payload.dial,
          hasError: false,
        },
        waterTemperature: {
          value: action.payload.waterTemperature,
          hasError: false,
        },
        coffeeAmount: {
          value: action.payload.coffeeAmount,
          hasError: false,
        },
      };
    default:
      return state;
  }
};

export default reducer;
