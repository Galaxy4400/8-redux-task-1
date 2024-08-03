import css from './app.module.css';
import { Header, UserBlock } from './components';
import { useEffect } from 'react';
import { store, useStoreSubscribe } from './store';

const getUserFromServer = () => ({
	id: '3453',
	name: 'Евгений',
	age: '33',
	email: 'moiseevEO@yandex.ru',
	phone: '+7 (985) 822-02-03',
});

const getAnotherUserFromServer = () => ({
	id: '1235',
	name: 'Другой пользователь',
	age: '99',
	email: 'test@test.ru',
	phone: '+7 (999) 999-99-99',
});

export const App = () => {
	useStoreSubscribe();

	useEffect(() => {
		store.dispatch({ type: 'SET_USER_DATA', payload: getUserFromServer() });
	}, []);

	const onUserChange = () => {
		store.dispatch({ type: 'SET_USER_DATA', payload: getAnotherUserFromServer() });
	};

	return (
		<div className={css.app}>
			<Header />
			<hr />
			<UserBlock />
			<button onClick={onUserChange}>Сменить пользователя</button>
		</div>
	);
};
