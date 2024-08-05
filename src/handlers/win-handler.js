import { setGameStatus, setWinPattern } from "../actions";
import { GAME_STATUS } from "../constants";
import { store } from "../store";
import { getWinPattern, isWin } from "../utils";

export function winHandler(cells) {
	if (!isWin(cells)) return false;

	store.dispatch(setWinPattern(getWinPattern(cells)));
	store.dispatch(setGameStatus(GAME_STATUS.WIN));

	return true;
}
