import { createContext, useReducer } from 'react';
import reducer from '../reducers/reducer';
import { ADD_TO_CART } from '../actions/cartAction';

const initialState = {
	cart: [],
};

export const StateContext = createContext(initialState);

export const StateProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const addToCart = (item) => {
		dispatch({ type: ADD_TO_CART, payload: item });
	};
	return (
		<StateContext.Provider value={{ ...state, addToCart }}>
			{children}
		</StateContext.Provider>
	);
};
