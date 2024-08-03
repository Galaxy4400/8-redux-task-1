import { useEffect, useState } from "react";
import { appReducer } from "./reducer";

const createStore = (reducer) => {
	let state;

	const listeners = [];

	return {
		dispatch: (action) => {
			state = reducer(state, action);

			listeners.forEach(listener => listener());
		},
		getState: () => state,
		subscribe: (listener) => {
			listeners.push(listener);

			return () => listeners.splice(listeners.length - 1, 1);
		},
	};
};


export const store = createStore(appReducer);


export const useStoreSubscribe = () => {
	const [rerenderFlag, setRerenderFlag] = useState(false);

	useEffect(() => {
		const rerender = () => setRerenderFlag(!rerenderFlag);

		return store.subscribe(rerender);
	}, [rerenderFlag]);
};


store.dispatch({});
