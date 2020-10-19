import React, { Fragment, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import PoeLadderContext from '../../context/poeladder/poeLadderContext';

const Character = ({ match }) => {
  const poeLadderContext = useContext(PoeLadderContext);

  useEffect(() => {
    // getUser(match.params.login);
    // getUserRepos(match.params.login);
    //eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <Link to='/' className='btn btn-light'>
        Back To Search
        <h1>{match.params.name}</h1>
      </Link>
    </Fragment>
  );
};

export default Character;
