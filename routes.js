const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');

// Routes function
let routes = (app) => {
  app.use('/auth', authRoutes); // auth Routes
  app.use('/user', userRoutes); // user Routes

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