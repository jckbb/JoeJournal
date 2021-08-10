import {actionTypes} from './actions';

export const initialState = {
  aroma: {
    value: 2,
  },
  acidity: {
    value: 2,
  },
  sweetness: {
    value: 2,
  },
  body: {
    value: 2,
  },
  finish: {
    value: 2,
  },
  overall: {
    value: 0,
  },
};

const formReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_EVALUATE_FORM_FIELD:
      return {
        ...state,
        [action.field]: {
          value: action.payload,
        },
      };
    default:
      return state;
  }
};

export default formReducer;
