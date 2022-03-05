import {
	ADD_TO_CART,
	CHANGE_CART_QTY,
	REMOVE_FROM_CART,
} from '../actions/cartAction';

/* export const getCartTotal = (cart) =>
	cart?.reduce((amount, item) => item.price + amount, 0);
 */
export const getCartTotal = (cart) =>
	cart.reduce((acc, curr) => acc + Number(curr.price) * curr.quantity, 0);

const reducer = (state, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			return {
				...state,
				cart: [...state.cart, action.payload],
			};

		case REMOVE_FROM_CART:
			return {
				...state,
				cart: state.cart.filter((item) => item.id !== action.payload),
			};

		case CHANGE_CART_QTY:
			return {
				...state,
				cart: state.cart.filter((item) =>
					item.id === action.payload.id
						? (item.quantity = action.payload.qty)
						: item.quantity
				),
			};
		default:
			return state;
	}
};

export default reducer;
