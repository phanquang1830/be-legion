const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalURL}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) =>{
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode).json({
      statusCode,
      message: 'Có lỗi xảy ra',
      data: null,
      error: err.message || 'Unknow error',
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
    
}

export {notFound, errorHandler}