import React, { Component } from 'react';
import CalcWinner from '../helpers/CalcWinner'
import { connect } from 'react-redux';
import SaveCurrentMovement from '../redux/actions/currentMovement';
import JumpToMovement from '../redux/actions/jumpToMovement';
import GameUI from '../Components/GameUI';

class Game extends Component {

    constructor(props) {
        super(props);
    }


    handleClick(i) {
        const history = this.props.history.slice(0, this.props.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();

        if (CalcWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.props.xIsNext ? 'X' : 'O';
        console.log(squares);
        this.props.SaveCurrentMovement(squares);
    }

    jumpTo(step) {
        this.props.JumpToMovement(step);
    }

    CPUMovement() {
        const history = this.props.history.slice(0, this.props.stepNumber + 1);
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        var random = 0.0;

        while (true) {
            //Tablero lleno
            if ((history.length) - 1 == 9) {
                return;
            }
            random = Math.round(Math.random() * 8)

            if (squares[random] === null) {
                this.handleClick(random);
                return;
            }
        }

    }
    render() {
        console.log("hace render");
        const {
            history,
            stepNumber,
            xIsNext,
            modeGame

        } = this.props;

        const current = history[stepNumber];
        const winner = CalcWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Ir al movimiento #' + move :
                'Nuevo juego';
            return (

                <li key={move}>
                    <button className="btn btn-light btnMoves" onClick={() => this.jumpTo(move)}>{desc}</button>
                </li>
            );
        });

        let status;
        if (winner) {
            status = 'Ganador: ' + winner;
        } else {
            status = 'Turno de: ' + (xIsNext ? 'X' : 'O');
        }
        //Si modo de juego es Vs CPU
        if (modeGame === 2) {
            //Si turno es de O (CPU)
            if (!xIsNext) {
                console.log("turno de O");
                if(history.length -1 == stepNumber){
                    this.CPUMovement();
                }
                
            }           
        } 
        return (
            <GameUI status={status} moves={moves} squares={current.squares}
                onClick={(i) => this.handleClick(i)} modeGame={modeGame}>
            </GameUI>
        )

    }
}
/*function mapStateToProps(state){
    console.log(state);
}
*/
const mapStateToProps = state => ({
    history: state.history,
    stepNumber: state.stepNumber,
    xIsNext: state.xIsNext,
    modeGame: state.modeGame,
});


const mapDispatchToProps = {
    SaveCurrentMovement,
    JumpToMovement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);