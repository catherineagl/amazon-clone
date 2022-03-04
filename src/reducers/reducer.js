import { ADD_TO_CART } from '../actions/cartAction';

export const getCartTotal = (cart) =>
	cart?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
	switch (action.type) {
		case ADD_TO_CART:
			return {
				cart: [...state.cart, action.payload],
			};

		default:
			return state;
	}
};

export default reducer;
