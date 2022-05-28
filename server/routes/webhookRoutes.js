const Stripe = require('stripe');
const express = require('express');
const app = express();
const router = express.Router();
app.use(express.static('public'));

const endpointSecret =  Stripe(process.env.STRIPE_ENDPOINT_SECRET);

router.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  console.log(`Unhandled event type ${event.type}`);

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});


module.exports = router;


// https://52b4-2603-8080-6a05-3415-55ce-47a-9561-c29.ngrok.io