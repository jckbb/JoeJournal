import {actionTypes} from './actions';

export const initialState = {
  setup: {},
  prep: {},
  stage: [],
  brewId: '',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_ALL:
      return {
        ...state,
        ...action.payload,
      };
    case actionTypes.UPDATE_SETUP:
      return {
        ...state,
        setup: action.payload,
        brewId: action.id,
      };
    case actionTypes.UPDATE_PREP:
      return {
        ...state,
        prep: action.payload,
      };
    case actionTypes.UPDATE_STAGE:
      return {
        ...state,
        stage: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
