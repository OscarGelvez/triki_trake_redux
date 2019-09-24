import React from 'react';
import GameInfo from './GameInfo';
import GameBoard from './GameBoard'

const GameUI = (props) => {

    return (
        <div className="game" >
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-xs-12">
                        <GameBoard
                            squares={props.squares}
                            onClick={(i) => props.onClick(i)}
                        />
                    </div>
                    <div className="col-md-4 col-xs-12">
                        <GameInfo status={props.status} moves={props.moves}></GameInfo>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default GameUI;