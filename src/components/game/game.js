import css from './game.module.scss';
import { Field } from '../field/field';
import { Information } from '../information/information';
import { GAME_STATUS } from '../../constants';
import { useDispatch, useReduxState } from '../../redux-manager';
import { reset } from '../../actions';

export function Game() {
	const { gameStatus } = useReduxState();
	const dispatch = useDispatch();

	return (
		<div className={css['game']}>
			<Information />
			<Field />
			{gameStatus !== GAME_STATUS.TURN && <button onClick={() => dispatch(reset())}>Начать заново</button>}
		</div>
	);
}
