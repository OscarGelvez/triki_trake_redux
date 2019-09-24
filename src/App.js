import React, { Component } from 'react';
import './App.css';
import Game from './Containers/Game';
import GameMode from './Components/GameMode';
import { connect } from 'react-redux';
import SetModeGame from '../src/redux/actions/setModeGame';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Tic tac toe</h1>
          <GameMode onClick={(i) => this.props.SetModeGame(i)}></GameMode>
          <Game></Game>
        </header>
      </div>
    );

  }

}
const mapStateToProps = state => ({
});

const mapDispatchToProps = {
  SetModeGame,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
