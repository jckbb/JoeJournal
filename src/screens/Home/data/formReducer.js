import actionTypes from './actionTypes';

export const initialState = {
  coffee: {
    value: null,
    hasError: true,
  },
  method: {
    value: '',
    hasError: true,
  },
  grinder: {
    value: '',
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
