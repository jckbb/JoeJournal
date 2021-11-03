import {actionTypes} from './actions';

export const initialState = {
  brewId: '',
  brewData: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.DELETE_BREW:
      return initialState;
    case actionTypes.UPDATE_BREW:
      return {
        ...state,
        brewId: action.id,
        brewData: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
