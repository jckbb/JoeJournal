import {actionTypes} from './ActionTypes';

export const initialState = {
  origin: {
    hasError: false,
    value: '',
  },
  roaster: {
    hasError: false,
    value: '',
  },
  notes: {
    hasError: false,
    value: '',
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
        },
      };
    case actionTypes.UPDATE_ERROR:
      return {
        ...state,
        [action.field]: {
          ...state[action.field],
          hasError: action.hasError,
        },
      };
    default:
      return state;
  }
};

export default reducer;
