const express = require('express');
const app = express();
const mocked_routes = require('./routes/mocks.js');
const port = process.env.PORT || 5000;

require('dotenv').config();
app.listen(port);

app.use(express.json());

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  })

app.use('/api/mocks', mocked_routes);