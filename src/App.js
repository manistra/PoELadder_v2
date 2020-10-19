import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Alert from './components/layout/Alert';
import About from './components/pages/About';
import Home from './components/pages/Home';
import NotFound from './components/pages/NotFound';
import AlertState from './context/alert/AlertState';
import PoeLadderState from './context/poeladder/PoeLadderState';
import './App.css';

const App = () => {
  return (
    <AlertState>
      <PoeLadderState>
        <Router>
          <div className='App'>
            <div className='container'>
              <Alert />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </PoeLadderState>
    </AlertState>
  );
};

export default App;
