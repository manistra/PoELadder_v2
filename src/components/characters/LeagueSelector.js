import React, { useState, useEffect, useContext } from 'react';
import PoeLadderContext from '../../context/poeladder/poeLadderContext';
import AlertContext from '../../context/alert/alertContext';

const LeagueSelector = () => {
  const poeLadderContext = useContext(PoeLadderContext);
  const alertContext = useContext(AlertContext);

  const [selecetedValue, setText] = useState('Select a league');

  useEffect(() => {
    poeLadderContext.getLeagues();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    if (selecetedValue === 'Choose a league') {
      alertContext.setAlert('Please select a league', 'light');
    } else {
      console.log('manistra');
      setText('Choose a league');
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <h1>League selector</h1>
      <form onSubmit={onSubmit} className='form'>
        <select onChange={onChange}>
          <option value={selecetedValue}>{selecetedValue}</option>
          {poeLadderContext.leagues.map((league) => (
            <option key={league.id} value={league.id}>
              {league.id}
            </option>
          ))}
        </select>
        <input type='submit' name='search' className='btn btn-dark btn-block' />
      </form>
    </div>
  );
};

export default LeagueSelector;
