import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import { StateProvider } from './context/StateProvider';
import Login from './components/Login';

function App() {
	const [login, setLogin] = useState(false);

	return (
		<Router>
			<div className="app">
				<StateProvider>
					{!login && <Header setLogin={setLogin} />}
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/checkout" element={<Checkout />} />
						<Route path="/login" element={<Login setLogin={setLogin} />} />
					</Routes>
				</StateProvider>
			</div>
		</Router>
	);
}

export default App;
