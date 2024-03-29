import React from 'react';
import './../App.css';

const Square = (props) => {
    return (
        <button 
            className="square"
            style={{ color: (props.value === "X"? "#e9ebeb":"#282c34") }}
            onClick={() => props.onClick()}>
            {props.value}
        </button>
    );
}


export default Square;