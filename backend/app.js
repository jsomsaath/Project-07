//Calling all the module we're going to use
const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');

const app = express();
app.use(express.json());

//Allow us the access from anywhere
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
app.use(helmet());

  module.exports = app;