import React, { Component } from 'react';
import './App.css';
import Game from './Containers/Game';

class App extends Component {
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1>Tic tac toe</h1>
          <Game></Game>

        </header>
      </div>
    );

  }

}

export default App;
