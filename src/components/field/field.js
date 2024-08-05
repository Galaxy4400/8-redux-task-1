import css from './field.module.scss';
import { getCellClassName } from '../../utils';
import { cellClickHandler } from '../../handlers/cell-click-handler';
import { useDispatch, useReduxState } from '../../redux-manager';

export function Field() {
	const { cells, winPattern, gameStatus, currentPlayer } = useReduxState();
	const dispatch = useDispatch();

	return (
		<div className={css['field']}>
			{cells.map((player, cellId) => (
				<button
					className={getCellClassName(player, cellId, winPattern)}
					onClick={() => cellClickHandler(cellId, cells, gameStatus, currentPlayer, dispatch)}
					key={cellId}
				></button>
			))}
		</div>
	);
}
