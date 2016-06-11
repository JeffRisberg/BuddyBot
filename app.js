'use strict';

var express = require('express');
var path = require('path');
var expressHbs = require('express-handlebars');

var app = express();

// Bootstrap application settings
require('./config/express')(app);

// configure the template engine and make it the current view rendering engine
app.engine('hbs', expressHbs({extname: 'hbs', defaultLayout: 'main.hbs'}));
app.set('view engine', 'hbs');

require('./router')(app);

// error-handler settings
require('./config/error-handler')(app);

module.exports = app;
