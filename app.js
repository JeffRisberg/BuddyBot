'use strict';

var express = require('express');
var path = require('path');
var expressHbs = require('express-handlebars');

var app = express();

// Bootstrap application settings
require('./config/express')(app);

// configure the template engine and make it the current view rendering engine
var hbs = expressHbs.create({
    extname: 'hbs',
    defaultLayout: 'main.hbs',
    helpers: {
        formatPercentage: function (val) {
            return Math.round(100 * val);
        }
    }
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');

require('./config/database')(process.env.DATABASE_URL || 'mongodb://localhost/buddybot');

require('./router')(app);

// error-handler settings
require('./config/error-handler')(app);

module.exports = app;
