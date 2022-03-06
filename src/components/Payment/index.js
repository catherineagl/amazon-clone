import React, { useContext } from 'react';
import {
	Container,
	PaymentContainer,
	PaymentSection,
	PaymentTitle,
	PaymentAddress,
	PaymentItems,
	PaymentDetails,
} from './PaymentElements';
import { StateContext } from '../../context/StateProvider';
import FlipMove from 'react-flip-move';
import CheckoutProduct from '../CheckoutProduct';
import { Link } from 'react-router-dom';

const Payment = () => {
	const { user, cart } = useContext(StateContext);
	return (
		<Container>
			<PaymentContainer>
				<h1>Checkout ({<Link to="/checkout">{cart?.length} Items</Link>})</h1>
				<PaymentSection>
					<PaymentTitle>
						<h3>Delivery Address</h3>
					</PaymentTitle>
					<PaymentAddress>
						<p>{user?.email}</p>
						<p>123 React Lane</p>
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
						<PaymentDetails></PaymentDetails>
					</PaymentTitle>
				</PaymentSection>
			</PaymentContainer>
		</Container>
	);
};

export default Payment;
