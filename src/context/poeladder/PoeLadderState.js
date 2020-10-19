import React, { useReducer } from 'react';
import axios from 'axios';
import PoeLadderContext from './poeLadderContext';
import PoeLadderReducer from './poeLadderReducer';
import { GET_LEAGUES, GET_CHARACTERS } from '../types';

const PoeLadderState = (props) => {
  const initialState = {
    leagues: [],
    characters: [],
  };
  const [state, dispatch] = useReducer(PoeLadderReducer, initialState);

  //Get Leagues
  const getLeagues = async () => {
    const res = await axios.get(`http://api.pathofexile.com/leagues`);

    dispatch({
      type: GET_LEAGUES,
      payload: res.data,
    });
  };
  //Get Characters by League
  const getCharacters = async (league) => {
    const res = await axios.get(`http://api.pathofexile.com/ladders/${league}`);

    dispatch({
      type: GET_CHARACTERS,
      payload: res.data.entries,
    });
  };

  return (
    <PoeLadderContext.Provider
      value={{
        leagues: state.leagues,
        characters: state.characters,
        getLeagues,
        getCharacters,
      }}
    >
      {props.children}
    </PoeLadderContext.Provider>
  );
};

export default PoeLadderState;
