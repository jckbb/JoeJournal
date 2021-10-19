import actionTypes from './actionTypes';

export const initialState = {
  coffee: {},
  method: '',
  grinder: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_FIELD:
      return {
        ...state,
        [action.field]: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
