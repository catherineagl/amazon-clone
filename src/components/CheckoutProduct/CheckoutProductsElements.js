import styled from 'styled-components';

export const CheckoutProductContainer = styled.div`
	display: flex;
	margin: 20px 0;
`;
export const CheckoutProductImage = styled.img`
	object-fit: contain;
	width: 180px;
	height: 180px;
`;
export const CheckoutProductInfo = styled.div`
	padding-left: 20px;

	> button {
		padding: 0.25rem;
		background: #f0c14b;
		border: 1px solid;
		margin-top: 10px;
		border-color: #a88734 #9c7e31 #846a29;
		color: #111;
		cursor: pointer;
	}
`;
export const CheckoutProductTitle = styled.p`
	font-size: 17px;
	font-weight: 800;
`;
export const CheckoutProductPrice = styled.p``;
export const CheckoutProductRating = styled.div`
	display: flex;
`;

export const CheckoutProductQuantity = styled.div``;
export const ButtonIncrement = styled.button`
	padding: 0.25rem;
	background-color: #fff;
	border: 1px solid;
	border-color: #a88734 #9c7e31 #846a29;
	color: #111;
	margin: 0.25rem;
	font-size: 1.5rem;
	font-weight: bold;
	cursor: pointer;
`;
export const ButtonDecrement = styled(ButtonIncrement)``;
export const ProductQuantity = styled.span``;
