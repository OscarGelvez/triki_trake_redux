import React from 'react';

const GameInfo = (props) => {

    return (
        <div className="game-info">
            <div className="statusText">{props.status}</div>      
            <ol>{props.moves}</ol>
        </div>
    );
}

export default GameInfo;