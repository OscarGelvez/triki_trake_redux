export const type = 'SAVE_MOVEVENT';

const currentMovement = (square) => ({
    type,
    payload: square,
});

export default currentMovement;
