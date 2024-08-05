import { ACTION_TYPE } from "./actions";
import { GAME_STATUS, PLAYER } from "./constants";

export const initialState = {
	currentPlayer: PLAYER.CROSS,
	gameStatus: GAME_STATUS.TURN,
	winPattern: [],
	cells: [...Array(9)].fill(PLAYER.NOBODY),
};

export const appReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case ACTION_TYPE.SET_CURRENT_PLAYER: {
			return { ...state, currentPlayer: payload };
		}
		case ACTION_TYPE.SET_GAME_STATUS: {
			return { ...state, gameStatus: payload };
		}
		case ACTION_TYPE.SET_WIN_PATTERN: {
			return { ...state, winPattern: payload };
		}
		case ACTION_TYPE.SET_CELLS: {
			return { ...state, cells: payload };
		}
		case ACTION_TYPE.RESET: {
			return initialState;
		}
		default: {
			return state;
		}
	}
};

