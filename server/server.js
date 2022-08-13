const dotenv = require('dotenv');
require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/dbConn');
const mongoSanitize = require('express-mongo-sanitize');
const helmet = require('helmet');
const cors = require('cors');
const xss = require('xss-clean');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const checkoutRouter = require('./routes/checkoutRoutes');
const webhookRouter = require('./routes/webhookRoutes');
const contactRouter = require('./routes/contactRoutes');
const newsLetterRouter = require('./routes/newsLetterRoutes');

const app = express();

connectDB();

app.use(
  cors({
    origin: [process.env.WEB_APP_URL],
  })
);

app.use(helmet());
app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb' }));
app.use(cookieParser());
app.use(mongoSanitize());
app.use(xss());

app.use((req, res, next) => {
  console.log('middleware check');
  next();
});

// 3) ROUTES

app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/checkout', checkoutRouter);
app.use('/api/v1/webhook', webhookRouter);
app.use('/api/v1/contactus', contactRouter);
app.use('/api/v1/newsletter', newsLetterRouter);

app.get('/', (req, res) => {
  // Sending the response
  res.send('Hello World!');

  // Ending the response
  res.end();
});

const port = process.env.PORT || 5001;

const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
