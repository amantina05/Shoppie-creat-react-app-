import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import axios from 'axios';
import Nav from './Nav';
import Home from './Home';
import Header from './Header';
import Login from './Login';
import Profile from './Profile';
// import UseMovieSearch from './useMovieSearch';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route path="/profile">
            <Nav />
            <Profile />
          </Route>
          <Route path="/login">
            <Nav />
            <Login />
          </Route>
          <Route path="/">
            <Nav />
            <Home />
          </Route>
        </Switch>
        {/* <UseMovieSearch /> */}
      </div>
    </Router>
  );
}

export default App;
