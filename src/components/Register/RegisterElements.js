import styled from 'styled-components';

export const LoginContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	height: 100vh;
	background-color: white;

	font-family: Arial, Helvetica, sans-serif;
`;

export const LoginLogo = styled.img`
	margin: 20px auto;
	margin-top: 10px;
	object-fit: contain;
	width: 100px;
`;

export const LoginContent = styled.div`
	width: 300px;
	height: fit-content;
	display: flex;
	flex-direction: column;
	border-radius: 4px;
	border: 1px solid #ddd;
	padding: 20px;

	> h1 {
		font-size: 28px;
		font-weight: 500;
		margin-bottom: 20px;
		color: #111;
	}

	> p {
		margin-top: 15px;
		font-size: 11px;

		span {
			color: blue;
			cursor: pointer;
		}
	}
`;
export const Form = styled.form`
	> label {
		font-weight: 700;
		font-size: 13px;
	}

	> input {
		margin-top: 5px;
		width: 100%;
		height: 31px;
		padding: 3px 7px;
		line-height: normal;
		border: 1px solid #a6a6a6;
		border-top-color: #949494;
		border-radius: 3px;
		box-shadow: 0 1px 0 rgba(255, 255, 255, 0.5),
			0 1px 0 rgba(0, 0, 0, 0.07) inset;
		outline: 0;

		&:focus {
			border-color: #e77600;
			box-shadow: 0 0 3px 2px rgb(228 121 17 / 50%);
		}
	}
`;
export const LoginSignInBtn = styled.button`
	background-color: #f0c14b;
	border-radius: 2px;
	width: 100%;
	height: 30px;
	border: 1px solid;
	margin-top: 10px;
	border-color: #a88734 #9c7e31 #846a29;
	cursor: pointer;
`;
export const LoginRegisterBtn = styled.button`
	border-radius: 3px;
	width: 300px;
	height: 30px;
	border: 1px solid;
	border-color: #adb1b8 #a2a6ac #8d9096;
	margin-top: 10px;
	background: linear-gradient(to bottom, #f7f8fa, #e7e9ec);
	cursor: pointer;
	transition: 0.3s;
	&:hover {
		background: #e7e9ec;
	}
`;

export const Login = styled.div`
	display: flex;
	margin-top: 10px;
	font-size: 11px;

	a {
		text-decoration: none;
		color: blue;
		margin-left: 2.5px;
	}
`;
