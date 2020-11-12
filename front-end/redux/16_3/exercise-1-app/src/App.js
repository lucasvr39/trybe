import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Home'
import Login from './components/Login'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" render={ <Home /> } />
        <Route path="/login" render={ <Login /> } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
