require('dotenv').config();
const express = require('express');
const path = require('path');
const corsOptions = require('./config/corsOptions');


const cookieParser = require('cookie-parser');

const mongoose = require('mongoose');
const connectDB = require('./config/dbConn');
const cors = require('cors');

const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const checkoutRouter = require('./routes/checkoutRoutes');
const webhookRouter = require('./routes/webhookRoutes');
const mongoSanitize = require('express-mongo-sanitize');
const dotenv = require('dotenv');
const app = express();

connectDB();

// Cross Origin Resource Sharing
app.use(cors());

app.options('*', cors());

// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

// built-in middleware for json
app.use(express.json());

//middleware for cookies
app.use(cookieParser());

app.use((req, res, next) => {
  console.log('middleware check');
  next();
});

// app.use(bodyParser.json());


// 3) ROUTES

app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/checkout', checkoutRouter);
app.use('/api/v1/webhook', webhookRouter);

app.get('/', function (req, res) {
  res.send({ status: 'success' });
});

app.all('*', (req, res) => {
  res.status(404);
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, 'views', '404.html'));
  } else if (req.accepts('json')) {
    res.json({ error: '404 Not Found' });
  } else {
    res.type('txt').send('404 Not Found');
  }
});


const port = process.env.PORT || 5001;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
