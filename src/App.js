import { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import { StateContext } from './context/StateProvider';
import Login from './components/Login';
import Register from './components/Register';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function App() {
	const [login, setLogin] = useState(false);

	const { setUser } = useContext(StateContext);

	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in
				// https://firebase.google.com/docs/reference/js/firebase.User

				setUser(user);
				// ...
			} else {
				// User is signed out
				// ...
				setUser(null);
			}
		});
	}, []);

	return (
		<Router>
			<div className="app">
				{!login && <Header setLogin={setLogin} />}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/checkout" element={<Checkout />} />
					<Route path="/login" element={<Login setLogin={setLogin} />} />
					<Route path="/register" element={<Register setLogin={setLogin} />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
