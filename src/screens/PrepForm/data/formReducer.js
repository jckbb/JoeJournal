import {actionTypes} from './actions';

export const initialState = {
  dial: {
    value: 0,
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
    default:
      return state;
  }
};

export default reducer;
