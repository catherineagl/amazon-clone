import React, { useContext } from 'react';
import {
	ProductContainer,
	ProductInfo,
	ProductPrice,
	ProductRating,
} from './ProductElements';
import { MdStar } from 'react-icons/md';
import { StateContext } from '../../context/StateProvider';

const Product = ({ id, title, price, image, rating }) => {
	const { addToCart } = useContext(StateContext);

	const handleClick = () => {
		addToCart({ id, title, price, image, rating, quantity: 1 });
	};

	return (
		<ProductContainer>
			<ProductInfo>
				<p>{title}</p>
				<ProductPrice>
					<small>$</small>
					<strong>{price}</strong>
				</ProductPrice>
				<ProductRating>
					{Array(rating)
						.fill()
						.map((_, i) => (
							<MdStar />
						))}
				</ProductRating>
			</ProductInfo>
			<img src={image} alt="" />
			<button onClick={handleClick}>Add to cart</button>
		</ProductContainer>
	);
};

export default Product;
