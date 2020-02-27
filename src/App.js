import React from 'react';
import './App.css';
import HomePage from './pages/homepage/HomePage';
import Produce from './pages/produce/Produce'
import {Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/produce' component={Produce} />
      </Switch>
    </div>
  );
}

export default App;
