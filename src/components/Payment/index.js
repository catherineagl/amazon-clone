import React, { useContext, useState, useEffect } from 'react';
import {
	Container,
	PaymentContainer,
	PaymentSection,
	PaymentTitle,
	PaymentAddress,
	PaymentItems,
	PaymentDetails,
	PaymentPriceContainer,
} from './PaymentElements';
import { StateContext } from '../../context/StateProvider';
import FlipMove from 'react-flip-move';
import CheckoutProduct from '../CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getCartTotal } from '../../context/reducer';
import axios from '../../axios';
import { db } from '../../firebase';
import { doc, setDoc } from 'firebase/firestore';

const Payment = ({ setLogin }) => {
	const { user, cart, emptyCart } = useContext(StateContext);
	const navigate = useNavigate();

	const stripe = useStripe();
	const elements = useElements();

	const [succeeded, setSucceded] = useState(false);
	const [processing, setProcessing] = useState('');
	const [error, setError] = useState(null);
	const [disabled, setDisabled] = useState(true);
	const [clientSecret, setClientSecret] = useState(true);

	useEffect(() => {
		const getClientSecret = async () => {
			const response = await axios({
				method: 'post',
				//stripe expects the total in the currencies submits
				url: `/payments/create?total=${getCartTotal(cart) * 100}`,
			});
			setClientSecret(response.data.clientSecret);
		};
		getClientSecret();
	}, [cart]);

	const handleSubmit = async (event) => {
		event.preventDefault();
		setProcessing(true);

		const payload = await stripe
			.confirmCardPayment(clientSecret, {
				payment_method: {
					card: elements.getElement(CardElement),
				},
			})
			.then(({ paymentIntent }) => {
				const orders = doc(db, 'users', user.uid, 'orders', paymentIntent.id);
				const order = {
					cart: cart,
					amount: paymentIntent.amount,
					created: paymentIntent.created,
				};
				setDoc(orders, order);

				setSucceded(true);
				setError(null);
				setProcessing(false);
				emptyCart();
				navigate('/orders');
			});
	};

	const handleChange = (event) => {
		setDisabled(event.empty);
		setError(event.error ? event.error.message : '');
	};

	return (
		<Container>
			{user ? (
				<PaymentContainer>
					<h1>Checkout ({<Link to="/checkout">{cart?.length} Items</Link>})</h1>

					<PaymentSection>
						<PaymentTitle>
							<h3>Delivery Address</h3>
						</PaymentTitle>
						<PaymentAddress>
							<p>{user?.email}</p>
							<p>123 Santa Monica</p>
							<p>Los Angeles, CA</p>
						</PaymentAddress>
					</PaymentSection>
					<PaymentSection>
						<PaymentTitle>
							<h3>Review items and delivery</h3>
						</PaymentTitle>
						<PaymentItems>
							<FlipMove enterAnimation="elevator" leaveAnimation="elevator">
								{cart.length > 0 &&
									cart.map((item) => (
										<CheckoutProduct
											id={item.id}
											title={item.title}
											image={item.image}
											price={item.price}
											rating={item.rating}
											quantity={item.quantity}
											key={item.id}
										/>
									))}
							</FlipMove>
						</PaymentItems>
					</PaymentSection>
					<PaymentSection>
						<PaymentTitle>
							<h3>Payment Method</h3>
						</PaymentTitle>
						<PaymentDetails>
							<form onSubmit={handleSubmit}>
								<CardElement onChange={handleChange} />
								<PaymentPriceContainer>
									<CurrencyFormat
										renderText={(value) => <h3>Order Total: {value}</h3>}
										decimalScale={2}
										value={getCartTotal(cart)}
										displayType={'text'}
										thousandSeparator={true}
										prefix={'$'}
									/>
									<button disabled={processing || disabled || succeeded}>
										<span>{processing ? <p>Processing</p> : 'Buy Now'}</span>
									</button>
								</PaymentPriceContainer>

								{error && <div>{error}</div>}
							</form>
						</PaymentDetails>
					</PaymentSection>
				</PaymentContainer>
			) : (
				<h1>
					<Link to="/login" onClick={() => setLogin(true)}>
						Sign In
					</Link>{' '}
					to checkout
				</h1>
			)}
		</Container>
	);
};

export default Payment;
