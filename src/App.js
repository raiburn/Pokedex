import React, { Component } from 'react';
import './App.css';
import Pokedex from './Pokedex.js';

class App extends Component {
  render() {
    return (
      <div className="container"> 
        <Pokedex/>
      </div>
      
    );
  }
}

export default App;
