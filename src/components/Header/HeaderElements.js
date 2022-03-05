import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';
import { CgShoppingCart } from 'react-icons/cg';

export const Container = styled.header`
	height: 60px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: #131921;
	position: sticky;
	top: 0;
	z-index: 100;
`;
export const ImgContainer = styled.div`
	width: 100px;
	height: auto;
	margin: 0 20px;
	margin-top: 18px;
	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;

export const SearchBarContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;
	input {
		border-radius: 5px;
		height: 30px;
		padding: 10px;
		border: none;
		width: 100%;
		outline-color: #cd9042;
	}
`;

export const SearchIcon = styled(MdSearch)`
	padding: 5px;
	height: 30px;
	font-size: 2rem;
	border-top-right-radius: 5px;
	border-bottom-right-radius: 5px;
	background-color: #cd9042;
	border: none;
	transform: translateX(-100%);
`;
export const Nav = styled.div`
	display: flex;
	justify-content: space-evenly;
`;
export const NavOption = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0 10px;
	color: white;
	cursor: pointer;
	a {
		display: flex;
		flex-direction: column;
		color: white;
		text-decoration: none;
	}
`;
export const LineOne = styled.span`
	font-size: 10px;
`;
export const LineTwo = styled.span`
	font-size: 13px;
	font-weight: 800;
`;

export const NavOptionCart = styled.div`
	display: flex;
	align-items: center;
	color: white;
`;
export const Cart = styled(CgShoppingCart)`
	font-size: 1.5rem;
`;
export const CartCount = styled(LineTwo)`
	margin: 0 10px;
`;
