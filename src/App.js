import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Components/Header/Header.js';
import Login from './Components/Login/Login.js';
import Dashboard from './Components/Dashboard/Dashboard.js';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route exact path="/" component={Login} />
        <Route exact path="/Dashboard" component={Dashboard} />
      </Router>
    </div>
  );
}

export default App;
