import React, { useContext } from 'react';
import CharacterItem from './CharacterItem';
import PoeLadderContext from '../../context/poeladder/poeLadderContext';

const Characters = () => {
  const poeLadderContext = useContext(PoeLadderContext);
  const { characters } = poeLadderContext;

  return (
    <div>
      <div className='all-center' style={itemStyle}>
        <h3>Rank</h3>
        <h3>Account</h3>
        <h3>Character</h3>
        <h3>Class</h3>
      </div>
      {characters.map((character) => (
        <CharacterItem key={character.rank} character={character} />
      ))}
    </div>
  );
};
const itemStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5,1fr)',
  gridGap: '1rem',
};

export default Characters;
