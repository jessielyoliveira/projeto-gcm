import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Choice from './pages/Choice';
import Credit from './pages/Credit';
import Debit from './pages/Debit';
import Register from './pages/Register';


export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Choice}/>
        <Route path="/credit" component={Credit}/>
        <Route path="/debit" component={Debit}/>
        <Route path="/register" component={Register}/>
      </Switch>
    </BrowserRouter>
  );
}