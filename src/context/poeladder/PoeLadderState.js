import React, { useReducer } from 'react';
import axios from 'axios';
import PoeLadderContext from './poeLadderContext';
import PoeLadderReducer from './poeLadderReducer';
import { GET_LEAGUES } from '../types';

const PoeLadderState = (props) => {
  const initialState = {
    leagues: [],
  };
  const [state, dispatch] = useReducer(PoeLadderReducer, initialState);

  //Search Users
  const getLeagues = async () => {
    const res = await axios.get(`http://api.pathofexile.com/leagues`);

    dispatch({
      type: GET_LEAGUES,
      payload: res.data,
    });
  };

  return (
    <PoeLadderContext.Provider
      value={{
        leagues: state.leagues,
        getLeagues,
      }}
    >
      {props.children}
    </PoeLadderContext.Provider>
  );
};

export default PoeLadderState;
