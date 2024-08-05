import { setGameStatus } from "../actions";
import { GAME_STATUS } from "../constants";
import { store } from "../store";
import { isDraw } from "../utils";

export function drawHandle(cells) {
	if (!isDraw(cells)) return false;

	store.dispatch(setGameStatus(GAME_STATUS.DRAW));

	return true;
}
