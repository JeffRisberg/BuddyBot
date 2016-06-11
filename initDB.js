/**
 * Created by Brandon Risberg on 4/28/2016.
 */

var express = require('express');
var path = require('path');

var app = express();

// db bootstrap (development only)
if (app.get('env') === 'development') {
    require('./config/database')('mongodb://localhost/buddybot');

    var Profile = require('./models/profile');

    var oprah = new Profile({username: "Oprah Winfrey", "email": "oprah@gmail.com",
       watsonResult: null});
    oprah.save();

    var lincoln = new Profile({username: "Abraham lincoln", "email": "abe@whitehouse.gov",
        watsonResult: null});
    lincoln.save();

    console.log('initDB');
}
else {
    console.log('Only run initDb in development');
}