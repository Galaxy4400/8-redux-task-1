import { GAME_STATUS, PLAYER } from "./constants";

export const initialState = {
	currentPlayer: PLAYER.CROSS,
	gameStatus: GAME_STATUS.TURN,
	winPattern: [],
	cells: [...Array(9)].fill(PLAYER.NOBODY),
};

export const appReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_CURRENT_PLAYER': {
			return { ...state, currentPlayer: payload };
		}
		case 'SET_GAME_STATUS': {
			return { ...state, gameStatus: payload };
		}
		case 'SET_WIN_PATTERN': {
			return { ...state, winPattern: payload };
		}
		case 'SET_CELLS': {
			return { ...state, cells: payload };
		}
		case 'RESET': {
			return initialState;
		}
		default: {
			return state;
		}
	}
};

