import React from 'react';
import {Footer} from "./Footer";
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
