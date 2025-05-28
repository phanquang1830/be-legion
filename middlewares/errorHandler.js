function errorHandler(err, req, res, next) {
  console.error(err.stack);

  // Sequelize Validation & Unique Constraint Error
  if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
    return res.status(400).json({
      status: 'fail',
      message: err.errors.map(e => e.message).join('; '),
    });
  }

  // JWT Authentication Error
  if (err.name === 'UnauthorizedError' || err.name === 'JsonWebTokenError') {
    return res.status(401).json({
      status: 'fail',
      message: 'Invalid or expired token',
    });
  }

  // Forbidden Error
  if (err.statusCode === 403) {
    return res.status(403).json({
      status: 'fail',
      message: err.message || 'Forbidden',
    });
  }

  // Not Found Error
  if (err.statusCode === 404) {
    return res.status(404).json({
      status: 'fail',
      message: err.message || 'Resource not found',
    });
  }

  // Default: Internal Server Error
  res.status(err.statusCode || 500).json({
    status: 'error',
    message: err.message || 'Internal Server Error',
  });
}

export default errorHandler;
