export const SET_FIELD = 'SET_FIELD';
export const SET_CURRENT_PLAYER = 'SET_CURRENT_PLAYER';
export const SET_IS_GAME_ENDED = 'SET_IS_GAME_ENDED';
export const SET_IS_DRAW = 'SET_IS_DRAW';
export const SET_WINNER = 'SET_WINNER';
export const RESTART_GAME = 'RESTART_GAME';
export const MAKE_MOVE = 'MAKE_MOVE';

export const setField = (field) => ({
	type: SET_FIELD,
	payload: field,
});

export const setCurrentPlayer = (player) => ({
	type: SET_CURRENT_PLAYER,
	payload: player,
});
export const restartGame = () => ({
	type: RESTART_GAME,
});
