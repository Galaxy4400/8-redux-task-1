import css from './information.module.scss';
import { getInfoTitle } from '../../utils';
import { useReduxState } from '../../redux-manager';

export function Information() {
	const { gameStatus, currentPlayer } = useReduxState();

	return <div className={css['info']}>{getInfoTitle(gameStatus, currentPlayer)}</div>;
}
