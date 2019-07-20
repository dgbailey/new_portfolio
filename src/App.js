import React from 'react';
import logo from './logo.svg';
import './App.css';
import {GlobalTopContainer} from "./GlobalTopContainer";
import {Nav} from "./Nav.js";
function App() {
  return (
    <div className="App">
      <Nav/>
      <GlobalTopContainer/>
    </div>
  );
}

export default App;
