import { setCurrentPlayer } from "../actions";
import { PLAYER } from "../constants";
import { store } from "../store";

export function switchPlayerHandler() {
	const { currentPlayer } = store.getState();

	store.dispatch(setCurrentPlayer(currentPlayer === PLAYER.CROSS ? PLAYER.CIRCLE : PLAYER.CROSS));
}
