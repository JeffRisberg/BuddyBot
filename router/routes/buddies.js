'use strict';

var express = require('express'),
    url = require('url');

var router = express.Router();

router.get('/', function (req, res) {

    // To be changed!!!
    var buddies = [];
    buddies.push({name: 'Abraham Lincoln', id: 4});
    buddies.push({name: 'Mahatma Gandhi', id: 6});
    buddies.push({name: 'John Lennon', id: 7});

    res.render("buddies", {buddies: buddies});
});

module.exports = router;
