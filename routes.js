const userRoutes = require('./routes/users');

// Routes function
const routes = (app) => {
  app.use('/api/users', userRoutes); // User Routes

  // 404 Route
  app.get('*', err_404);
};

// Error 404 Handler
const err_404 = (req, res) => {
  res.status(404).json({
    success: false,
    msg: 'Invalid API Endpoint'
  });
}

module.exports = routes;