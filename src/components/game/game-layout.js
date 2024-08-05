import css from './game.module.scss';
import { Field } from '../field/field';
import { Information } from '../information/information';
import { GAME_STATUS } from '../../constants';
import { store } from '../../store';
import { reset } from '../../actions';

export function GameLayout() {
	const { gameStatus } = store.getState();

	return (
		<div className={css['game']}>
			<Information />
			<Field />
			{gameStatus !== GAME_STATUS.TURN && <button onClick={() => store.dispatch(reset())}>Начать заново</button>}
		</div>
	);
}
