import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	padding: 20px;
	justify-content: space-between;
	background-color: white;
	height: max-content;
`;
export const CheckoutAd = styled.div`
	width: 100%;
	margin-bottom: 30px;
`;
export const ColumnLeft = styled.div``;
export const CheckoutTitle = styled.h2`
	margin-bottom: 50px;
`;
export const ColumnRight = styled(ColumnLeft)``;
export const EmptyCart = styled.div`
	max-width: 400px;

	img {
		width: 100%;
	}
`;
