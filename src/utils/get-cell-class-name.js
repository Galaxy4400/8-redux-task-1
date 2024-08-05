import css from '../components/field/field.module.scss';
import { PLAYER } from '../constants';

export function getCellClassName(player, cellId, winPattern) {
	let className = [css['tile']];

	if (player === PLAYER.CROSS) className.push(css['tile_cross']);
	if (player === PLAYER.CIRCLE) className.push(css['tile_circle']);

	if (winPattern.some((winCellId) => winCellId === cellId)) {
		className.push(css['win']);
	}

	return className.join(' ');
}
