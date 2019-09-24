import React, { Component } from 'react';
import Square from './Square'


class Board extends Component {

    renderSquare(i) {
        return (<Square value={this.props.squares[i]}
            onClick={() => this.props.onClick(i)} />);
    }
    render() {
        return (
            <div className="game-board">
                <div className="container">
                    <div className="row">
                        <div className="col-12 squareCol">
                            <div className="">
                                {this.renderSquare(0)}
                                {this.renderSquare(1)}
                                {this.renderSquare(2)}
                            </div>
                        </div>
                        <div className="col-12 squareCol">
                            <div className="">
                                {this.renderSquare(3)}
                                {this.renderSquare(4)}
                                {this.renderSquare(5)}
                            </div>
                        </div>
                        <div className="col-12 squareCol">
                            <div className="">
                                {this.renderSquare(6)}
                                {this.renderSquare(7)}
                                {this.renderSquare(8)}
                            </div>
                        </div>
                    </div>
                </div>                
            </div>
        );
    }

}

export default Board;