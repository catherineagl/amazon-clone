import { createContext, useReducer } from 'react';
import reducer from './reducer';
import {
	ADD_TO_CART,
	CHANGE_CART_QTY,
	EMPTY_CART,
	REMOVE_FROM_CART,
	SET_USER,
} from '../actions/cartAction';

const initialState = {
	cart: [],
	user: null,
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

	const changeCartQty = (id, qty) => {
		dispatch({
			type: CHANGE_CART_QTY,
			payload: { id, qty },
		});
	};

	const setUser = (user) => {
		if (user) {
			dispatch({
				type: SET_USER,
				payload: user,
			});
		} else {
			dispatch({
				type: SET_USER,
				payload: null,
			});
		}
	};

	const emptyCart = () => {
		dispatch({
			type: EMPTY_CART,
		});
	};

	return (
		<StateContext.Provider
			value={{
				...state,
				addToCart,
				removeFromCart,
				changeCartQty,
				setUser,
				existInCart,
				emptyCart,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};
