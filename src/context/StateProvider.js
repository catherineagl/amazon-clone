import { createContext, useReducer } from 'react';
import reducer from './reducer';
import {
	ADD_TO_CART,
	CHANGE_CART_QTY,
	INCREMENT_QUANTITY,
	REMOVE_FROM_CART,
} from '../actions/cartAction';

const initialState = {
	cart: [],
};

export const StateContext = createContext(initialState);

export const StateProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const existInCart = (itemId) => state.cart.find((item) => item.id === itemId);

	const addToCart = (item) => {
		if (existInCart(item.id)) alert('item already exist in cart');
		else {
			dispatch({ type: ADD_TO_CART, payload: item });
		}
	};
	const removeFromCart = (id) => {
		dispatch({ type: REMOVE_FROM_CART, payload: id });
	};

	/* 	const incrementProductQty = (id) => {
		dispatch({
			type: INCREMENT_QUANTITY,
			payload: id,
		});
	}; */

	const changeCartQty = (id, qty) => {
		dispatch({
			type: CHANGE_CART_QTY,
			payload: { id, qty },
		});
	};

	return (
		<StateContext.Provider
			value={{
				...state,
				addToCart,
				removeFromCart,
				changeCartQty,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};
