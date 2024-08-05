import { GAME_STATUS } from "../constants";
import { PLAYER_ACTION } from "../constants/player-action";
import { PLAYER_NAME } from "../constants/player-name";
import { store } from "../store";

export function getInfoTitle() {
	const { gameStatus, currentPlayer } = store.getState();

	const playerAction = PLAYER_ACTION[gameStatus];
	const playerName = PLAYER_NAME[currentPlayer];

	return gameStatus === GAME_STATUS.DRAW ? 'Ничья' : `${playerAction}: ${playerName}`;
}
