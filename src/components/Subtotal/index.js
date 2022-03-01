import React from 'react';
import { Container, SubtotalGift } from './SubtotalElements';
import CurrencyFormat from 'react-currency-format';

const Subtotal = () => {
	return (
		<Container>
			<CurrencyFormat
				renderText={(value) => (
					<>
						<p>
							Subtotal (0 items): <strong>0</strong>
						</p>
						<SubtotalGift>
							<input type="checkbox" />
							This order contains a gift
						</SubtotalGift>
					</>
				)}
				decimalScale={2}
				value={0}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>

			<button>Proceed to Checkout</button>
		</Container>
	);
};

export default Subtotal;
