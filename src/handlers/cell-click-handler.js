import { setCells } from '../actions';
import { GAME_STATUS, PLAYER } from '../constants';
import { store } from '../store';
import { getUpdatedCells } from '../utils';
import { drawHandle } from './draw-handler';
import { switchPlayerHandler } from './switch-player-handler';
import { winHandler } from './win-handler';

export function cellClickHandler(cellIndex) {
	const { cells, gameStatus, currentPlayer } = store.getState();

	if (cells[cellIndex] !== PLAYER.NOBODY || gameStatus !== GAME_STATUS.TURN) return;

	const updateCels = getUpdatedCells(cells, cellIndex, currentPlayer);

	store.dispatch(setCells(updateCels));

	if (winHandler(updateCels)) return;
	if (drawHandle(updateCels)) return;

	switchPlayerHandler();
}
