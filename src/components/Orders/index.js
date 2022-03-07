import React, { useState, useEffect, useContext } from 'react';
import { StateContext } from '../../context/StateProvider';
import { db } from '../../firebase';
import { Container, OrdersContainer } from './OrdersElements';
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import Order from '../Order';
const Orders = ({ setLogin }) => {
	const [orders, setOrders] = useState([]);
	const { user } = useContext(StateContext);

	useEffect(() => {
		if (user) {
			const getData = async () => {
				const q = query(
					collection(db, 'users', user.uid, 'orders'),
					orderBy('created', 'desc')
				);
				const allOrders = onSnapshot(q, (querySnapshot) => {
					setOrders(
						querySnapshot.docs.map((snap) => ({
							id: snap.id,
							data: snap.data(),
						}))
					);
				});
			};
			getData();
		} else {
			setOrders([]);
		}
	}, [user]);

	return (
		<Container>
			{user ? (
				<h1>Your Orders</h1>
			) : (
				<h1>
					<Link to="/login" onClick={() => setLogin(true)}>
						Sign In
					</Link>{' '}
					to see your orders history
				</h1>
			)}

			<OrdersContainer>
				{orders.map((order) => (
					<Order order={order} />
				))}
			</OrdersContainer>
		</Container>
	);
};

export default Orders;
