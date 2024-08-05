import { setGameStatus, setWinPattern } from "../actions";
import { GAME_STATUS } from "../constants";
import { getWinPattern, isWin } from "../utils";

export function winHandler(cells, dispatch) {
	if (!isWin(cells)) return false;

	dispatch(setWinPattern(getWinPattern(cells)));
	dispatch(setGameStatus(GAME_STATUS.WIN));

	return true;
}
