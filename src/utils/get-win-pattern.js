import { WIN_PATTERNS } from "../constants";
import { store } from "../store";

export function getWinPattern(cells) {
	const { currentPlayer } = store.getState();

	return WIN_PATTERNS.find((pattern) => pattern.every((fieldId) => cells[fieldId] === currentPlayer));
}
