import { type as SAVE_MOVEVENT } from '../actions/currentMovement';
import { type as JUMP_TO_MOVEVENT } from '../actions/jumpToMovement';
import { type as SET_MODEGAME } from '../actions//setModeGame';


const defaultState = {
    history: [{
        squares: Array(9).fill(null)
    }],
    stepNumber: 0,
    xIsNext: true,
    modeGame: 1,
}

function reducer(state = defaultState, { type, payload }) {
    let auxHistory = [];    
    switch (type) {
        case SAVE_MOVEVENT: {
            if (!payload) {
                return null;
            }     

            if (state.stepNumber === 0) {
                auxHistory = state.history.slice();
                auxHistory.push({squares: payload});
                
            }else{
                auxHistory = state.history.slice(0, state.stepNumber+1);
                auxHistory.push({squares: payload});
            }
            return {
                ...state,
                history: auxHistory,
                stepNumber: auxHistory.length-1, 
                xIsNext: !state.xIsNext
            }
        }
        

        case JUMP_TO_MOVEVENT: {

            if (payload === 0) {
                return defaultState;
            }
            console.log("pasa");
            return {
                
                ...state,
                stepNumber: payload,
                xIsNext: (payload % 2) === 0,
            }
        }

        case SET_MODEGAME: {          
            return {                
                ...state,
                modeGame: payload,
            }
        }

        default:
            return state;
    }
}

export default reducer;