import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Choice from './pages/Choice';
import Credit from './pages/Credit';
import Debit from './pages/Debit';
import Register from './pages/Register';
import Transfer from './pages/Transfer';
import Balance from './pages/Balance';


export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Choice}/>
        <Route path="/credit" component={Credit}/>
        <Route path="/debit" component={Debit}/>
        <Route path="/register" component={Register}/>
        <Route path="/transfer" component={Transfer}/>
        <Route path="/balance" component={Balance}/>
      </Switch>
    </BrowserRouter>
  );
}