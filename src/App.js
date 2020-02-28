import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'

import HomePage from './pages/homepage/HomePage'
import Produce from './pages/produce/Produce'
import Cart from './pages/cart/Cart'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/produce' component={Produce} />
        <Route path='/cart' component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
