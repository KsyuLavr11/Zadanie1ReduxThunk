export const initialState = {
	currentPlayer: 'X',
	isGameEnded: false,
	isDraw: false,
	field: Array(9).fill(null),
	winner: null,
};

export const gameReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'SET_CURRENT_PLAYER': {
			return { ...state, currentPlayer: action.payload };
		}
		case 'SET_IS_GAME_ENDED': {
			return { ...state, isGameEnded: action.payload };
		}
		case 'SET_IS_DRAW': {
			return { ...state, isDraw: action.payload };
		}
		case 'SET_FIELD': {
			return { ...state, field: action.payload };
		}
		case 'SET_WINNER': {
			return { ...state, winner: action.payload };
		}
		case 'RESTART_GAME': {
			return initialState;
		}
		default:
			return state;
	}
};
