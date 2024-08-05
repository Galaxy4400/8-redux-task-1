import { setCells } from '../actions';
import { GAME_STATUS, PLAYER } from '../constants';
import { getUpdatedCells } from '../utils';
import { drawHandle } from './draw-handler';
import { switchPlayerHandler } from './switch-player-handler';
import { winHandler } from './win-handler';

export function cellClickHandler(cellIndex, cells, gameStatus, currentPlayer, dispatch) {
	if (cells[cellIndex] !== PLAYER.NOBODY || gameStatus !== GAME_STATUS.TURN) return;

	const updateCels = getUpdatedCells(cells, cellIndex, currentPlayer);

	dispatch(setCells(updateCels));

	if (winHandler(updateCels, dispatch)) return;
	if (drawHandle(updateCels, dispatch)) return;

	switchPlayerHandler(currentPlayer, dispatch);
}
