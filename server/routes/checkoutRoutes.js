const express = require('express');
const app = express();
const Stripe = require('stripe');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const AppError = require('./../utils/appError');
dotenv.config({ path: '.env' });
app.use(express.static('public'));

const router = express.Router();

const stripe = Stripe(process.env.STRIPE_TEST_API_KEY);

router.post('/create-checkout-session', async (req, res) => {
  const { line_items } = req.body;

  let session;
  try {
    session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      line_items: line_items,
      success_url: 'http://localhost:3000/checkout-success',
      cancel_url: `${process.env.WEB_APP_URL}`,
      shipping_address_collection: { allowed_countries: ['US'] },
    });

    res.send({ url: session.url });
  } catch (err) {
    alert(err);
    res
      .status(400)
      .json({ error: 'an error occurred. Unable to create session' });
  }
});

module.exports = router;
