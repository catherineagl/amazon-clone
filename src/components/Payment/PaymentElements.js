import styled from 'styled-components';

export const Container = styled.div`
	background-color: white;
`;
export const PaymentContainer = styled.div`
	> h1 {
		text-align: center;
		padding: 10px;
		font-weight: 400;
		background-color: rgb(234, 237, 237);
		border-bottom: 1px solid lightgray;
		padding: 1rem 0;
		> a {
			text-decoration: none;
		}
	}
`;
export const PaymentSection = styled.div`
	display: flex;
	padding: 20px;
	margin: 0 20px;
	border-bottom: 1px solid lightgray;
`;
export const PaymentTitle = styled.div`
	flex: 0.2;
`;
export const PaymentAddress = styled.div`
	flex: 0.8;
`;
export const PaymentItems = styled.div`
	flex: 0.8;
`;
export const PaymentDetails = styled.div``;
