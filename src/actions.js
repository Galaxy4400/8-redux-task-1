export const ACTION_TYPE = {
	SET_CURRENT_PLAYER: 'SET_CURRENT_PLAYER',
	SET_GAME_STATUS: 'SET_GAME_STATUS',
	SET_WIN_PATTERN: 'SET_WIN_PATTERN',
	SET_CELLS: 'SET_CELLS',
	RESET: 'RESET',
};


export const setCurrentPlayer = (player) => {
	return { type: ACTION_TYPE.SET_CURRENT_PLAYER, payload: player };
};

export const setGameStatus = (status) => {
	return { type: ACTION_TYPE.SET_GAME_STATUS, payload: status };
};

export const setWinPattern = (pattern) => {
	return { type: ACTION_TYPE.SET_WIN_PATTERN, payload: pattern };
};

export const setCells = (cells) => {
	return { type: ACTION_TYPE.SET_CELLS, payload: cells };
};

export const reset = () => {
	return { type: ACTION_TYPE.RESET };
};




