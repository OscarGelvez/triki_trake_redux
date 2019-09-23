export const type = 'JUMP_TO_MOVEVENT';

const jumpToMovement = (step) => ({
    type,
    payload: step,
});

export default jumpToMovement;