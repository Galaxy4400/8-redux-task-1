import { useStoreSubscribe } from '../../store';
import { GameLayout } from './game-layout';

export function Game() {
	useStoreSubscribe();

	return (
		<GameLayout/>
	);
}
