const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
	"sk_test_51JdImOIlyPsxMgsxtkZe8GNoluJF5YExwSjeM1JqunlIUYy8UAcm7GZX7Mw2YQmve8PSiop0HiFqdODUQor9do1q005eR49n6W");


// API

// APP config
const app = express();
// Middlewares
app.use(cors({origin: true}));
app.use(express.json());
// API routes
app.get("/", (request, response) => response.status(200).send("Hello"));

app.post("/payments/create", ((request, response) => {
	let paymentIntent = null;
	const total = request.query.total;
	paymentIntent = stripe.paymentIntents.create({
		amount: total,
		currency: "usd",
	});
	response.status(201).send({
		clientSecret: paymentIntent.client_secret,
	});
}));

// Listen Command

exports.api = functions.https.onRequest(app);

