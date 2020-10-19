import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Choice from './pages/Choice';
import Credit from './pages/Credit';


export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Choice}/>
        <Route path="/credit" component={Credit}/>
      </Switch>
    </BrowserRouter>
  );
}