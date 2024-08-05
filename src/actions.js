export const ACTION_TYPE = {
	SET_CURRENT_PLAYER: 'SET_CURRENT_PLAYER',
	SET_GAME_STATUS: 'SET_GAME_STATUS',
	SET_WIN_PATTERN: 'SET_WIN_PATTERN',
	SET_CELLS: 'SET_CELLS',
	RESET: 'RESET',
};


export const setCurrentPlayer = (player) => {
	console.log(ACTION_TYPE.SET_CURRENT_PLAYER, player);
	return { type: ACTION_TYPE.SET_CURRENT_PLAYER, payload: player };
};

export const setGameStatus = (status) => {
	console.log(ACTION_TYPE.SET_GAME_STATUS, status);
	return { type: ACTION_TYPE.SET_GAME_STATUS, payload: status };
};

export const setWinPattern = (pattern) => {
	console.log(ACTION_TYPE.SET_WIN_PATTERN, pattern);
	return { type: ACTION_TYPE.SET_WIN_PATTERN, payload: pattern };
};

export const setCells = (cells) => {
	console.log(ACTION_TYPE.SET_CELLS, cells);
	return { type: ACTION_TYPE.SET_CELLS, payload: cells };
};

export const reset = () => {
	console.log(ACTION_TYPE.RESET);
	return { type: ACTION_TYPE.RESET };
};




