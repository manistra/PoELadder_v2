import React, { Fragment } from 'react';
import LeagueSelector from '../characters/LeagueSelector';
import Characters from '../characters/Characters';

const Home = () => (
  <Fragment>
    <LeagueSelector />
    <Characters />
  </Fragment>
);
export default Home;
