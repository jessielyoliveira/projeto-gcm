import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Choice from './pages/Choice';
import Credit from './pages/Credit';
import Debit from './pages/Debit';


export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Choice}/>
        <Route path="/credit" component={Credit}/>
        <Route path="/debit" component={Debit}/>
      </Switch>
    </BrowserRouter>
  );
}