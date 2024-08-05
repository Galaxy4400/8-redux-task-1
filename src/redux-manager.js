import { useRef, useState } from "react";


const reduxManager = {
	store: null,
	listeners: new Map(),
	render: () => reduxManager.listeners.forEach(listener => listener(Symbol())),
};


export const useReduxState = () => {
	const [renderFlag, setRenderFlag] = useState(Symbol());

	const listenerKey = useRef(renderFlag).current;

	reduxManager.listeners.set(listenerKey, setRenderFlag);

	return reduxManager.store.getState();
};


export const useDispatch = () => {
	return (action) => {
		reduxManager.store.dispatch(action);

		reduxManager.render();
	};
};


export const ReduxRenderer = ({ store, children }) => {
	reduxManager.store = store;

	return children;
};
