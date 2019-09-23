import React, { Component } from 'react';
import Board from './Board'
import CalcWinner from '../helpers/CalcWinner'
import { connect } from 'react-redux';
import SaveCurrentMovement from '../redux/actions/currentMovement';
import JumpToMovement from '../redux/actions/jumpToMovement';

class Game extends Component {

    constructor(props) {
        super(props);
        
       /* this.state = {
            history: [{
                squares: Array(9).fill(null),
            }],
            stepNumber: 0,
            xIsNext: true,
        }
        */
       console.log(this.props)
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
        /*
        this.setState({
            history: history.concat([{
                squares: squares,
            }]),
            stepNumber: history.length,
            xIsNext: !this.state.xIsNext
        });
        */
    }

    jumpTo(step) {
        console.log("jumpTo: " + step)
        this.props.JumpToMovement(step);
        /*this.setState({
            stepNumber: step,
            xIsNext: (step % 2) === 0,
        });
        */
    }
    render() {
       console.log("hace render");
        const {
            history,
            stepNumber,
            xIsNext

        } = this.props;
        console.log(stepNumber);
        const current = history[stepNumber];
        console.log(current.squares);
        const winner = CalcWinner(current.squares);

        
        const moves = history.map((step, move) => {
            const desc = move ?
                'Ir al movimiento #' + move :
                'Inicia el juego';
            return (

                <li key={move}>
                    <button onClick={() => this.jumpTo(move)}>{desc}</button>
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
            <div className="game" >
                <div className="game-board">
                    <Board
                        squares={current.squares}
                        onClick={(i) => this.handleClick(i)}
                    />

                </div>
                <div className="game-info">
                    <div>{status}</div>
                    <ol>{moves}</ol>
                </div>
            </div >

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