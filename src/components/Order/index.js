import React from 'react';
import { OrderContainer, OrderId, OrderTotal } from './OrderElements';
import moment from 'moment';
import CheckoutProduct from '../CheckoutProduct';
import CurrencyFormat from 'react-currency-format';

const Order = ({ order }) => {
	return (
		<OrderContainer>
			<h2>Order</h2>
			<p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
			<OrderId>
				<small>{order.id}</small>
			</OrderId>
			{order.data.cart?.map((item) => (
				<CheckoutProduct
					id={item.id}
					title={item.title}
					image={item.image}
					price={item.price}
					rating={item.rating}
					quantity={item.quantity}
					isPaid={true}
					key={item.id}
				/>
			))}
			<CurrencyFormat
				renderText={(value) => {
					<OrderTotal>Order Total: {value}</OrderTotal>;
				}}
				decimalScale={2}
				value={order.data.amount / 100}
				displayType={'text'}
				thousandSeparator={true}
				prefix={'$'}
			/>
		</OrderContainer>
	);
};

export default Order;
