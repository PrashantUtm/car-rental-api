const express = require('express');
const app = express();
const mocked_routes = require('./routes/mocks.js');
const bookings_routes = require('./routes/bookings.js');
const auth_routes = require('./routes/auth.js');
const port = process.env.PORT || 5000;

require('dotenv').config();
app.listen(port);

app.use(express.json());

app.options('*', function (req,res) { 
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.sendStatus(200); 
});

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });

const { auth } = require('./controllers/auth.js');

app.use('/api/bookings', auth, bookings_routes);
app.use('/api/mocks', mocked_routes);
app.use('/api/login', auth_routes);