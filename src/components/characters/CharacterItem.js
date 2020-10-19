import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CharacterItem = ({ character: { rank, character, account } }) => {
  return (
    <div className='card row text-center'>
      <div className='all-center' style={itemStyle}>
        <div>{rank}</div>
        <div>{account.name}</div>
        <div>{character.name}</div>
        <div>{character.class}</div>
        <Link
          to={`/character/${account.name}`}
          className='btn btn-dark btn-sm my-1'
        >
          More
        </Link>
      </div>
    </div>
  );
};

const itemStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5,1fr)',
  gridGap: '1rem',
};

CharacterItem.propTypes = {
  character: PropTypes.object.isRequired,
};

export default CharacterItem;
