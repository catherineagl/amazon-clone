import React, { useContext } from 'react';
import {
	CheckoutAd,
	CheckoutTitle,
	ColumnLeft,
	ColumnRight,
	Container,
	EmptyCart,
} from './CheckoutElements';
import Subtotal from '../Subtotal/index.js';
//cart empty
//https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg
import Ad from '../../images/ad.png';
import CheckoutProduct from '../CheckoutProduct';
import { StateContext } from '../../context/StateProvider';

const Checkout = () => {
	const { cart, user } = useContext(StateContext);
	return (
		<Container>
			<ColumnLeft>
				<CheckoutAd>
					<img src={Ad} alt="" />
				</CheckoutAd>
				<div>
					<h3>Hello, {user ? user.email : 'Guest'}</h3>
					<CheckoutTitle>
						Your shopping Cart {cart.length < 1 && 'is empty'}
					</CheckoutTitle>

					{cart.length > 0 ? (
						cart.map((item) => (
							<CheckoutProduct
								id={item.id}
								title={item.title}
								image={item.image}
								price={item.price}
								rating={item.rating}
								quantity={item.quantity}
								key={item.id}
							/>
						))
					) : (
						<EmptyCart>
							<img
								src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
								alt=""
							/>
						</EmptyCart>
					)}
				</div>
			</ColumnLeft>
			<ColumnRight>
				<Subtotal />
			</ColumnRight>
		</Container>
	);
};

export default Checkout;
