const dotenv = require('dotenv');
require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/dbConn');
// const cors = require('cors');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const checkoutRouter = require('./routes/checkoutRoutes');
const webhookRouter = require('./routes/webhookRoutes');
const contactRouter = require('./routes/contactRoutes');
const newsLetterRouter = require('./routes/newsLetterRoutes');
const mongoSanitize = require('express-mongo-sanitize');
const bodyParser = require('body-parser');

const app = express();

connectDB();

const whitelist = [process.env.URL ]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))

app.use(
  express.urlencoded({
    extended: true,
    limit: '25mb',
  })
);

app.use(express.json({ limit: '25mb' }));

app.use(bodyParser.json());

app.use(cookieParser());

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
