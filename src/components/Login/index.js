import React from 'react';
import { Link } from 'react-router-dom';
import {
	LoginContainer,
	LoginContent,
	LoginLogo,
	Form,
	LoginSignInBtn,
	LoginRegisterBtn,
} from './LoginElements';

const Login = ({ setLogin }) => {
	return (
		<LoginContainer>
			<Link to="/" onClick={() => setLogin(false)}>
				<LoginLogo
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-amazon_logo.svg.png"
					alt=""
				/>
			</Link>
			<LoginContent>
				<h1>Sign-in</h1>
				<Form>
					<label htmlFor="email">E-mail</label>
					<input type="text" name="email" id="email" />

					<label htmlFor="password">Password</label>
					<input type="password" name="password" id="password" />
					<LoginSignInBtn>Sign in</LoginSignInBtn>
				</Form>
				<p>
					By continuing, you agree to Amazon's <span>Conditions of Use</span>{' '}
					and <span>Privacy Notice.</span>
				</p>
			</LoginContent>
			<LoginRegisterBtn>Create your Amazon Account</LoginRegisterBtn>
		</LoginContainer>
	);
};

export default Login;
