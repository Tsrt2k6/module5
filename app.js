const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send({ message: "I hate lenovo I wish they would go bankrupt."});
});

module.exports = app;
