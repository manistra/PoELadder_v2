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
    if (selecetedValue === 'Select a league') {
      alertContext.setAlert('Please select a league', 'light');
    } else {
      console.log(selecetedValue);
      setText('Select a league');
    }
  };

  const onChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <form onSubmit={onSubmit} className='form'>
        <select defaultValue={selecetedValue} onChange={onChange}>
          <option hidden value={selecetedValue}>
            {selecetedValue}
          </option>
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
