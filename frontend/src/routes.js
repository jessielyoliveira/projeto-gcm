import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Choice from './pages/Choice';


export default function Routes(){
  return(
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Choice}/>
      </Switch>
    </BrowserRouter>
  );
}