import { store } from '../../../../store';

export const UserPersonalInfo = () => {
	const { name, age } = store.getState();

	const onUserUpdate = () => {
		const newUserData = { ...store.getState(), age: 999 };

		store.dispatch({ type: 'SET_USER_DATA', payload: newUserData });
	};

	const onUserAgeChange = () => {
		store.dispatch({ type: 'SET_USER_AGE', payload: 777 });
	};

	return (
		<div>
			<h3>Персональные данные:</h3>
			<div>Имя: {name}</div>
			<div>Возраст: {age}</div>
			<button onClick={onUserUpdate}>Сменить пользователя</button>
			<button onClick={onUserAgeChange}>Изменить возраст</button>
		</div>
	);
};
