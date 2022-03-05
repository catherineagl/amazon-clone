import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebase';
import { validateEmail } from '../../utils/validations';
import {
	LoginContainer,
	LoginContent,
	LoginLogo,
	Form,
	LoginSignInBtn,
	LoginRegisterBtn,
} from './LoginElements';

const Login = ({ setLogin }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const navigate = useNavigate();

	const singIn = async (e) => {
		e.preventDefault();
		if (email === '') return alert('name cant be empty');
		if (password === '') return alert('password cant be empty');
		if (!validateEmail(email)) return alert('please enter a valid email');

		//firebase login
		signInWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				const user = userCredential.user;
				if (user) {
					setLogin(false);
					navigate('/');
				}
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				alert(`Error ${errorCode}: ${errorMessage}`);
			});
	};

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
				<Form autoComplete="off">
					<label htmlFor="email">E-mail</label>
					<input
						type="text"
						name="email"
						id="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
					/>

					<label htmlFor="password">Password</label>
					<input
						type="password"
						name="password"
						id="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<LoginSignInBtn type="submit" onClick={singIn}>
						Sign in
					</LoginSignInBtn>
				</Form>
				<p>
					By continuing, you agree to Amazon's <span>Conditions of Use</span>{' '}
					and <span>Privacy Notice.</span>
				</p>
			</LoginContent>
			<LoginRegisterBtn>
				<Link to="/register">Create your Amazon Account</Link>
			</LoginRegisterBtn>
		</LoginContainer>
	);
};

export default Login;
