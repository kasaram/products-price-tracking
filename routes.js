const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const linkRoutes = require('./routes/linkRoutes');

// Routes function
let routes = (app) => {
  app.use('/auth', authRoutes); // auth Routes
  app.use('/user', userRoutes); // user Routes
  app.use('/links', linkRoutes); // link routes

  // 404 Route
  app.get('*', err_404);
};

// Error 404 Handler
let err_404 = (req, res) => {
  res.status(404).json({
    success: false,
    msg: 'Invalid API Endpoint'
  });
}

module.exports = routes;