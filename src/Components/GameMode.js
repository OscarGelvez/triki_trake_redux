import React from 'react';

const GameMode = (props) => {

    return (
        <div className="btn-group" role="group">
            <button type="button" className="btn btn-secondary" onClick={() => props.onClick(1)}>2 Jugadores</button>
            <button type="button" className="btn btn-secondary" onClick={() => props.onClick(2)}>Vs CPU</button>
        </div>
    );
}

export default GameMode;