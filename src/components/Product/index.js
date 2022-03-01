import React from 'react';
import {
	ProductContainer,
	ProductInfo,
	ProductPrice,
	ProductRating,
} from './ProductElements';

import { MdStarOutline } from 'react-icons/md';
import { MdStar } from 'react-icons/md';
import { MdStarHalf } from 'react-icons/md';

const Product = ({ id, title, price, image, rating }) => {
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
			<button>Add to cart</button>
		</ProductContainer>
	);
};

export default Product;
