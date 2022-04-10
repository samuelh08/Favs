const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.json({
    message: 'FAVS API',
  });
});

app.use((req, res, next) => {
  next({
    statusCode: 404,
    message: 'Route Not Found',
  });
});

app.use((err, req, res) => {
  const { message = '' } = err;
  let { statusCode = 500 } = err;

  if (err?.name === 'ValidationError') {
    statusCode = 422;
  }

  res.status(statusCode);
  res.json({
    message,
  });
});

module.exports = app;
