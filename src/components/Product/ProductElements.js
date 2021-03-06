import styled from 'styled-components';

export const ProductContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 10px;
	padding: 20px;
	width: 100%;
	max-height: 400px;
	min-width: 100px;
	background-color: white;
	z-index: 1;
	img {
		max-height: 200px;
		width: 100%;
		object-fit: contain;
		margin-bottom: 15px;
	}

	button {
		padding: 0.25rem;
		background-color: #f0c14b;
		border: 1px solid;
		margin-top: 10px;
		border-color: #a88734 #9c7e31 #846a29;
		color: #111;
		cursor: pointer;
	}
`;
export const ProductInfo = styled.div`
	width: 90%;
	height: 100px;
	margin-bottom: 15px;
`;
export const ProductPrice = styled.div`
	margin-top: 5px;
`;
export const ProductRating = styled.div`
	display: flex;
`;
