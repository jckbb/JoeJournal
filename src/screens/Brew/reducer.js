export const actionTypes = {
  UPDATE_FIELD: 'update field',
  UPDATE_ERROR: 'update error',
};

export const initialState = {
  error: {
    roastName: {
      hasError: false,
    },
  },
  data: {
    roastName: undefined,
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
        data: {
          ...state.data,
          [action.field]: action.payload,
        },
      };
    default:
      return state;
  }
};

export default formReducer;
