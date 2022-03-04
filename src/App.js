import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Checkout from './components/Checkout';
import { StateProvider } from './context/StateProvider';

function App() {
	return (
		<Router>
			<div className="app">
				<StateProvider>
					<Header />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/checkout" element={<Checkout />} />
					</Routes>
				</StateProvider>
			</div>
		</Router>
	);
}

export default App;
