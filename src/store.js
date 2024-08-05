import { createStore } from "redux";
import { appReducer } from "./reducer";
import { useEffect, useState } from "react";

export const store = createStore(appReducer);

store.dispatch({ type: 'init' });

export const useStoreSubscribe = () => {
	const [state, setState] = useState(store.getState());

	useEffect(() => {
		const handleStoreChange = () => {
			setState(store.getState());
		};

		const unsubscribe = store.subscribe(handleStoreChange);

		return () => unsubscribe();
	}, []);

	return state;
};
