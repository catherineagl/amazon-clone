import { useEffect, useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import Login from './components/Login';
import Register from './components/Register';
import Payment from './components/Payment';
import { StateContext } from './context/StateProvider';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Orders from './components/Orders';

function App() {
	const [login, setLogin] = useState(false);
	const { setUser } = useContext(StateContext);
	const promise = loadStripe(
		'pk_test_51JdImOIlyPsxMgsxc8ZgHwr1vreSELyOas6IxIPmj04WjXEwIAfieDHMEYEzCJTrIcxtsUYgIBouwX0Q24h5KwOC00lVyXyupt'
	);
	useEffect(() => {
		onAuthStateChanged(auth, (user) => {
			if (user) {
				// User is signed in
				// https://firebase.google.com/docs/reference/js/firebase.User
				setUser(user);
			} else {
				// User is signed out
				setUser(null);
			}
		});
	}, []);

	return (
		<Router>
			<Elements stripe={promise}>
				<div className="app">
					{!login && <Header setLogin={setLogin} />}
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/checkout" element={<Checkout />} />
						<Route path="/login" element={<Login setLogin={setLogin} />} />
						<Route
							path="/register"
							element={<Register setLogin={setLogin} />}
						/>
						<Route path="/payment" element={<Payment />} />
						<Route path="/orders" element={<Orders setLogin={setLogin} />} />
					</Routes>
				</div>
			</Elements>
		</Router>
	);
}

export default App;
