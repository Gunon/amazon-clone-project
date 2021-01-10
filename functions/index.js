const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51I7THdIpXPiNoexuvO1SQgsC6sUUdzGE5P8t0xJvfSOcsTuZ6fLUn27BfLYAB3BMMiHjXXJCL7oegHdalYpE9BtI00Bzs1hjF9');

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: '*' }));
app.use(express.json());

// - API routes

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  }).catch((err) => {
      console.log("errored")
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-2c79a/us-central1/api