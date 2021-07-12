export const actionTypes = {
  UPDATE_FIELD: 'update field',
  UPDATE_ERROR: 'update error',
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
  },
  data: {
    roastName: undefined,
    brewMethod: undefined,
    grinder: undefined,
    dial: 0,
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
    default:
      return state;
  }
};

export default formReducer;
