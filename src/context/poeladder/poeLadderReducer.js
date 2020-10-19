import { GET_CHARACTERS, GET_LEAGUES } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_LEAGUES:
      return {
        ...state,
        leagues: action.payload,
      };
    case GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };

    default:
      return state;
  }
};
