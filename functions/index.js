const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')(
	'sk_test_51JdImOIlyPsxMgsxtkZe8GNoluJF5YExwSjeM1JqunlIUYy8UAcm7GZX7Mw2YQmve8PSiop0HiFqdODUQor9do1q005eR49n6W'
);

//const SECRET_KEY ='sk_test_51JdImOIlyPsxMgsxtkZe8GNoluJF5YExwSjeM1JqunlIUYy8UAcm7GZX7Mw2YQmve8PSiop0HiFqdODUQor9do1q005eR49n6W';

//API

//APP config
const app = express();
//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
//API routes
app.get('/', (request, response) => response.status(200).send('ello world'));

app.post('/payments/create', async (request, response) => {
	const total = request.query.total;

	console.log('payment request receive!! for this ammount:', total);
	const paymentIntent = await stripe.paymentIntents.create({
		amount: total,
		currency: 'usd',
	});
	//ok - created
	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
});

//Listen Command

exports.api = functions.https.onRequest(app);
