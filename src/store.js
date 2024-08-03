import { createStore } from "redux";
import { appReducer } from "./reducer";
import { useEffect, useState } from "react";

export const store = createStore(appReducer);

store.dispatch({type: 'init'});

export const useStoreSubscribe = () => {
	const [rerenderFlag, setRerenderFlag] = useState(false);

	useEffect(() => {
		const rerender = () => setRerenderFlag(!rerenderFlag);

		return store.subscribe(rerender);
	}, [rerenderFlag]);
};
