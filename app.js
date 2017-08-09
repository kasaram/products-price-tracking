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
app.use(cors());

// Morgan logger
app.use(morgan('tiny'));

// Call routes
require('./routes')(app);

// start express listening on port
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});