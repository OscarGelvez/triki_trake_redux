export const type = 'SET_MODEGAME';

const setModeGame = (mode) => ({
    type,
    payload: mode,
});

export default setModeGame;