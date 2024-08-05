import { setCurrentPlayer } from "../actions";
import { PLAYER } from "../constants";

export function switchPlayerHandler(currentPlayer, dispatch) {
	dispatch(setCurrentPlayer(currentPlayer === PLAYER.CROSS ? PLAYER.CIRCLE : PLAYER.CROSS));
}
