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
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const Header = ({ setLogin }) => {
	const { cart, user } = useContext(StateContext);

	const handleAuthentication = async () => {
		if (user) {
			await signOut(auth);
			console.log('signing out');
		}
	};

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
				<NavOption onClick={handleAuthentication}>
					<Link to={!user && '/login'} onClick={() => !user && setLogin(true)}>
						<LineOne>Hello, {user ? user.email : 'Guest'}</LineOne>
						<LineTwo>{user ? 'Sign Out' : 'Sign In'}</LineTwo>
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
