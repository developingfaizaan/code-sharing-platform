const notFound = (req, res, next) => {
  const error = new Error(`Not Found 🔍 - ${req.originalUrl}`);
  res.status(404);
  next(error);
};

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  res.status(statusCode);

  res.json({
    error: true,
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? "🔥🔥" : err.stack,
  });
};

module.exports = { notFound, errorHandler };
