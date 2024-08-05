import { WIN_PATTERNS } from "../constants";
import { store } from "../store";

export function isWin(cells) {
	const { currentPlayer } = store.getState();

	return WIN_PATTERNS.some((pattern) => pattern.every((fieldId) => cells[fieldId] === currentPlayer));
}
