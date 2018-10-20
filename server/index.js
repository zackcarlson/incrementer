//import dependencies
const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const routes = require('./routes.js');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config.js');

// define the Express app
const app = express();

const port = process.env.PORT || 8081;

app.use(webpackMiddleware(webpack(webpackConfig)));

// enhance your app security with Helmet
app.use(helmet());

// use bodyParser to parse application/json content-type
app.use(bodyParser.json());

app.use(session({
  secret: '2C44-4D44-WppQ38S',
  resave: true,
  saveUninitialized: true
}));

// enable all CORS requests
app.use(cors());

// log HTTP requests
app.use(morgan('combined'));

// direct to correct route
app.use('/', routes);

// start the server
app.listen(port, () => {
  console.log('listening on port 8081');
});