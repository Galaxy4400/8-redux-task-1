import css from './field.module.scss';
import { getCellClassName } from '../../utils';
import { store } from '../../store';
import { cellClickHandler } from '../../handlers/cell-click-handler';

export function FieldLayout() {
	const { cells } = store.getState();

	return (
		<div className={css['field']}>
			{cells.map((player, cellId) => (
				<button
					className={getCellClassName(player, cellId)}
					onClick={() => cellClickHandler(cellId)}
					key={cellId}
				></button>
			))}
		</div>
	);
}
