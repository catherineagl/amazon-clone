import React, { forwardRef, useContext, useEffect, useState } from 'react';
import {
	ButtonDecrement,
	ButtonIncrement,
	CheckoutProductContainer,
	CheckoutProductImage,
	CheckoutProductInfo,
	CheckoutProductPrice,
	CheckoutProductQuantity,
	CheckoutProductRating,
	CheckoutProductTitle,
	ProductQuantity,
} from './CheckoutProductsElements';
import { MdStar } from 'react-icons/md';
import { StateContext } from '../../context/StateProvider';
import { GrFormSubtract } from 'react-icons/gr';
import { HiOutlinePlus } from 'react-icons/hi';

const CheckoutProduct = forwardRef(
	({ id, image, title, price, rating, quantity }, ref) => {
		const { removeFromCart, changeCartQty } = useContext(StateContext);
		const [qty, setQty] = useState(quantity);

		useEffect(() => {
			changeCartQty(id, qty);
		}, [qty]);

		const handleQty = (action) => {
			if (action === 'sum') {
				setQty(qty + 1);
			}
			if (action === 'res') {
				if (qty === 1) setQty(1);
				else setQty(qty - 1);
			}
		};

		const handleClick = () => {
			removeFromCart(id);
		};

		return (
			<CheckoutProductContainer ref={ref}>
				<CheckoutProductImage src={image} alt="" />

				<CheckoutProductInfo>
					<CheckoutProductTitle>{title}</CheckoutProductTitle>
					<CheckoutProductPrice>
						<small>$</small>
						<strong>{(price * qty).toFixed(2)}</strong>
					</CheckoutProductPrice>

					<CheckoutProductRating>
						{Array(rating)
							.fill()
							.map((_, i) => (
								<MdStar key={i} />
							))}
					</CheckoutProductRating>
					<CheckoutProductQuantity>
						<ButtonDecrement onClick={() => handleQty('res')}>
							<GrFormSubtract />
						</ButtonDecrement>
						<ProductQuantity>{qty}</ProductQuantity>
						<ButtonIncrement onClick={() => handleQty('sum')}>
							<HiOutlinePlus />
						</ButtonIncrement>
					</CheckoutProductQuantity>
					<button onClick={handleClick}>Remove from cart</button>
				</CheckoutProductInfo>
			</CheckoutProductContainer>
		);
	}
);

export default CheckoutProduct;
