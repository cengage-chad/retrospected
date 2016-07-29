import React from 'react';
import {Route} from 'react-router';
import App from './components';
import Home from './containers/Home';
import RetroView from './containers/RetroView';

export default (
  <Route name="app" component={App} path="/">
      <Route component={Home} path="home"/>
      <Route component={RetroView} path="retro"/>
  </Route>  
);