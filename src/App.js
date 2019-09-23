import React, { Component } from 'react';
import Game from './Containers/Game'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">         
         <h3>Juego Triki trake</h3>
         <Game/>
        </header>
      </div>
    );

  }

}

export default App;
