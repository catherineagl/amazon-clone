import React from 'react';
import {
	CheckoutAd,
	CheckoutTitle,
	ColumnLeft,
	ColumnRight,
	Container,
} from './CheckoutElements';
import Subtotal from '../Subtotal/index.js';
//cart empty
//https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg
import Ad from '../../images/ad.png';
const Checkout = () => {
	return (
		<Container>
			<ColumnLeft>
				<CheckoutAd>
					<img src={Ad} alt="" />
				</CheckoutAd>
				<div>
					<CheckoutTitle>Your shopping Cart</CheckoutTitle>
				</div>
			</ColumnLeft>
			<ColumnRight>
				<Subtotal />
			</ColumnRight>
		</Container>
	);
};

export default Checkout;
