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
    render() {
        console.log("hace render");
        const {
            history,
            stepNumber,
            xIsNext

        } = this.props;

        const current = history[stepNumber];
        const winner = CalcWinner(current.squares);

        const moves = history.map((step, move) => {
            const desc = move ?
                'Ir al movimiento #' + move :
                'Inicia el juego';
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
        return (
            
                <GameUI status={status} moves={moves} squares={current.squares}
                    onClick={(i) => this.handleClick(i)}>                    
                </GameUI>

        );
    }
}
/*function mapStateToProps(state){
    console.log(state);
}
*/
const mapStateToProps = state => ({
    history: state.history,
    stepNumber: state.stepNumber,
    xIsNext: state.xIsNext
});


const mapDispatchToProps = {
    SaveCurrentMovement,
    JumpToMovement,
};

export default connect(mapStateToProps, mapDispatchToProps)(Game);