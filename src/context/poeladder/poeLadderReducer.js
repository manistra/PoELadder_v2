import { GET_LEAGUES } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_LEAGUES:
      return {
        ...state,
        leagues: action.payload,
      };

    default:
      return state;
  }
};
