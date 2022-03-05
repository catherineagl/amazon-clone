import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
	LoginContainer,
	LoginContent,
	LoginLogo,
	Form,
	LoginSignInBtn,
	Login,
} from './RegisterElements';
import { auth } from '../../firebase';
import { validateEmail } from '../../utils/validations';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Register = ({ setLogin }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');

	const navigate = useNavigate();

	const register = (e) => {
		e.preventDefault();
		if (name === '') return alert('name cant be empty');
		if (!validateEmail(email)) return alert('please enter a valid email');
		if (password === '') return alert('please enter a password');
		if (passwordConfirm === '') return alert('please confirm the password');
		if (password !== passwordConfirm) return alert('passwords must be equals');

		//firebase register

		createUserWithEmailAndPassword(auth, email, password)
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
				<h1>Create account</h1>
				<Form autoComplete="off">
					<label htmlFor="name">Your name</label>
					<input
						type="text"
						name="name"
						id="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>

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

					<label htmlFor="passwordConfirm">Re-enter password</label>
					<input
						type="password"
						name="passwordConfirm"
						id="passwordConfirm"
						value={passwordConfirm}
						onChange={(e) => setPasswordConfirm(e.target.value)}
					/>
					<LoginSignInBtn type="submit" onClick={register}>
						Register
					</LoginSignInBtn>
				</Form>
				<p>
					By creating an account, you agree to Amazon's{' '}
					<span>Conditions of Use</span> and <span>Privacy Notice.</span>
				</p>
			</LoginContent>
			<Login>
				Alreay have an account? <Link to="/login">Sign-in</Link>
			</Login>
		</LoginContainer>
	);
};

export default Register;
