import { setGameStatus } from "../actions";
import { GAME_STATUS } from "../constants";
import { isDraw } from "../utils";

export function drawHandle(cells, dispatch) {
	if (!isDraw(cells)) return false;

	dispatch(setGameStatus(GAME_STATUS.DRAW));

	return true;
}
