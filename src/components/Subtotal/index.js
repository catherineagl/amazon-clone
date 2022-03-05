import React, { useContext } from 'react';
import { Container, SubtotalGift } from './SubtotalElements';
import CurrencyFormat from 'react-currency-format';
import { StateContext } from '../../context/StateProvider';
import { getCartTotal } from '../../context/reducer';

const Subtotal = () => {
	const { cart } = useContext(StateContext);

	return (
		<Container>
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal ({cart.length} items): <strong>{value}</strong>
						</p>
						<SubtotalGift>
							<input type="checkbox" />
							This order contains a gift
						</SubtotalGift>
					</>
				)}
				decimalScale={2}
				value={getCartTotal(cart)}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>

			<button>Proceed to Checkout</button>
		</Container>
	);
};

export default Subtotal;
