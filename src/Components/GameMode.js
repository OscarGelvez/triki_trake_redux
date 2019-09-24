import React from 'react';

const GameMode = (props) => {

    return (
        <div className="btn-group modeGame" role="group">
            <button type="button" className="btn btn-primary active" onClick={() => props.onClick(1)}>2 Jugadores</button>
            <button type="button" className="btn btn-success active" onClick={() => props.onClick(2)}>Vs CPU</button>
        </div>
    );
}

export default GameMode;