import React from 'react';
import {Switch, Route, withRouter } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Game from './components/Game';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/game" exact component={Game} />
      </Switch>
    </div>
  );
}

export default withRouter(App);
