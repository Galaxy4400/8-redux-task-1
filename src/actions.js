export const setCurrentPlayer = (player) => {
	return { type: 'SET_CURRENT_PLAYER', payload: player };
};

export const setGameStatus = (status) => {
	return { type: 'SET_GAME_STATUS', payload: status };
};

export const setWinPattern = (pattern) => {
	return { type: 'SET_WIN_PATTERN', payload: pattern };
};

export const setCells = (cells) => {
	return { type: 'SET_CELLS', payload: cells };
};

export const reset = () => {
	return { type: 'RESET' };
};




