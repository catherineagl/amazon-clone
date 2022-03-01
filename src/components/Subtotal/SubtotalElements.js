import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 300px;
	height: 150px;
	padding: 20px;
	background-color: #f3f3f3;
	border: 1px solid #ddd;
	border-radius: 3px;

	> button {
		background-color: #f0c14b;
		border-radius: 2px;
		width: 100%;
		height: 30px;
		border: 1px solid;
		margin-top: 10px;
		border-color: #a88734 #9c7e31 #846a29;
		color: #111;
		cursor: pointer;
	}
`;
export const SubtotalGift = styled.small`
	display: flex;
	align-items: center;

	> input {
		margin-right: 5px;
	}
`;
