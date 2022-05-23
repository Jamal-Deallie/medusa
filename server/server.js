const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');
const userRouter = require('./routes/userRoutes');
const productRouter = require('./routes/productRoutes');
const app = express();

// 1) MIDDLEWARES
if (process.env.NODE_ENV !== 'production') {
  // Load environment variables from .env file in non prod environments
  require('dotenv').config();
}

require('./utils/connectDB');
require("./strategies/JwtStrategy");
require("./strategies/LocalStrategy");
require("./authenticate");

app.use(express.json());


app.use((req, res, next) => {
  console.log('middleware check');
  next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: true,
  })
);
app.use(bodyParser.json());

app.use(passport.authenticate('session'));
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

const whitelist = process.env.WHITELISTED_DOMAINS
  ? process.env.WHITELISTED_DOMAINS.split(",")
  : [];

const corsOptions = {
    origin: function (origin, callback) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
  
    credentials: true,
  };
  
  app.use(cors(corsOptions));
  
  app.use(passport.initialize());
// 3) ROUTES

app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);

app.get("/", function (req, res) {
    res.send({ status: "success" });
  });

const port = process.env.PORT || 5001;
const server = app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
