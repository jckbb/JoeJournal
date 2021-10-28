import actionTypes from './actionTypes';

export const initialState = {
  bean: {
    value: null,
    hasError: true,
  },
  method: {
    value: undefined,
    hasError: true,
  },
  grinder: {
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
          hasError: action.error,
          value: action.payload,
        },
      };
    default:
      return state;
  }
};

export default reducer;
