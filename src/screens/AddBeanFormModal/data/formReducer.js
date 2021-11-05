import {actionTypes} from './ActionTypes';

export const initialState = {
  origin: {
    hasError: true,
    value: '',
  },
  roaster: {
    hasError: true,
    value: '',
  },
  notes: {
    hasError: false,
    value: '',
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.DELETE_ALL_FIELDS:
      return initialState;
    case actionTypes.UPDATE_FIELD:
      return {
        ...state,
        [action.field]: {
          value: action.payload,
          hasError: action.error,
        },
      };
    default:
      return state;
  }
};

export default reducer;
