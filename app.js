const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const fs = require("fs");
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const morgan = require('morgan');
const passport = require('passport');
const path = require("path");

// Local modules
const db_config = require("./config/db");

// App Port
const port = process.env.PORT || 3000;

// Mongoose Options
const mongo_options = {
  useMongoClient: true
};

// Connnect to mongoose
mongoose.connect(db_config.DB_URL, mongo_options);

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
  'http://pricetrack.in',
  'https://pricetrack.in'
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
app.use(passport.initialize());
app.use(passport.session());

// Call routes
require('./routes')(app);

// start express listening on port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
