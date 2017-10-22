const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const fs = require("fs");
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const morgan = require('morgan');
const passport = require('passport');
const path = require("path");

require('dotenv').config();

// App Port
const port = process.env.PORT || 3000;

// Mongoose Options
const mongo_options = {
  useMongoClient: true
};

// Connnect to mongoose
const URI = process.env.DB_URL || 'mongodb://localhost:27017/pricetrack'
mongoose.connect(URI, mongo_options);

// Mongoose connection instance
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.on('connected', console.info.bind(console, 'Mongodb Connected!'));


// Initialize express app
const app = express();

// Static resource folder
app.use(express.static(path.join(__dirname, 'public')));

// Body parser MW
app.use(bodyParser.json());

// CORS Middleware
let whiteList = [
  'http://192.168.1.65:4200',
  'chrome-extension://fhbjgbiflinjbdggehcddcbncdddomop',
  'http://localhost:3000',
  'http://127.0.0.1:8080',
  'http://pricetrack.in'
];
let corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};
app.use(cors(corsOptions));

// Morgan logger
app.use(morgan('tiny'));

// passport middleware
const JwtStrategy = require('./config/passport-jwt');
const FacebookStrategy = require('./config/passport-facebook');
app.use(passport.initialize());
app.use(passport.session());
passport.use(JwtStrategy);
passport.use(FacebookStrategy);

// Call routes
require('./routes')(app);

// start express listening on port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
