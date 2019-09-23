import { type as SAVE_MOVEVENT } from '../actions/currentMovement'; 
import { type as JUMP_TO_MOVEVENT } from '../actions/jumpToMovement'; 


const defaultState = {
    history: [{
        squares: Array(9).fill(null)
    }],
    stepNumber : 0,
    xIsNext: true,
}

function reducer(state = defaultState, { type, payload }) {
    switch (type) {
        case SAVE_MOVEVENT: {
            if (!payload) {
                return null;
            }
            return {
                ...state,
                history: [
                    ...state.history, {squares:payload} 
                ],
                stepNumber : state.history.length,
                xIsNext : !state.xIsNext
            }
        }

        case JUMP_TO_MOVEVENT: {
           
            if(payload === 0){
                return defaultState;
            }
            return {
                ...state,
                stepNumber : payload,
                xIsNext : !state.xIsNext
            }
        }

        default:
            return state;
    }
}

export default reducer;