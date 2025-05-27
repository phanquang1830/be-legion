function errorHandler(err, req, res, next) {
  console.error(err.stack);

  // Sequelize Validation Error
  if (err.name === 'SequelizeValidationError' || err.name === 'SequelizeUniqueConstraintError') {
    return res.status(400).json({
      status: 'fail',
      message: err.errors.map(e => e.message).join('; '),
    });
  }

  res.status(err.statusCode || 500).json({
    status: 'error',
    message: err.message || 'Internal Server Error',
  });
}

export default errorHandler;
