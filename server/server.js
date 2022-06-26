const dotenv = require('dotenv');
require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/dbConn');
const cors = require('cors');
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

// Handle options credentials check - before CORS!
// and fetch cookies credentials requirement
// app.use(credentials);

// Cross Origin Resource Sharing
app.use(cors());
// Access-Control-Allow-Origin *
// api.natours.com, front-end natours.com
// app.use(cors({
//   origin: 'https://www.natours.com'
// }))

app.options('*', cors());

// built-in middleware to handle urlencoded form data
app.use(
  express.urlencoded({
    extended: true,
    limit: '25mb',
  })
);

app.use(express.json({ limit: '25mb' }));

app.use(bodyParser.json());
// built-in middleware for json
//middleware for cookies
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
