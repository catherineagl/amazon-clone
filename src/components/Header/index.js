import React, { useContext, useState } from 'react';
import {
	Container,
	ImgContainer,
	Nav,
	NavOption,
	SearchBarContainer,
	SearchIcon,
	LineOne,
	LineTwo,
	NavOptionCart,
	Cart,
	CartCount,
} from './HeaderElements';
import Logo from '../../images/logo.svg';
import { Link } from 'react-router-dom';
import { StateContext } from '../../context/StateProvider';

const Header = ({ setLogin }) => {
	const { cart } = useContext(StateContext);

	return (
		<Container>
			<Link to="/">
				<ImgContainer>
					<img src={Logo} alt="logo" />
				</ImgContainer>
			</Link>

			<SearchBarContainer>
				<input type="text" />
				<SearchIcon />
			</SearchBarContainer>
			<Nav>
				<NavOption>
					<Link to="/login" onClick={() => setLogin(true)}>
						<LineOne>Hello Guest</LineOne>
						<LineTwo>Sign In</LineTwo>
					</Link>
				</NavOption>
				<NavOption>
					<LineOne>Returns</LineOne>
					<LineTwo>& Orders</LineTwo>
				</NavOption>
				<NavOption>
					<LineOne>Your</LineOne>
					<LineTwo>Prime</LineTwo>
				</NavOption>
				<Link to="/checkout">
					<NavOptionCart>
						<Cart />
						<CartCount>{cart?.length}</CartCount>
					</NavOptionCart>
				</Link>
			</Nav>
		</Container>
	);
};

export default Header;
