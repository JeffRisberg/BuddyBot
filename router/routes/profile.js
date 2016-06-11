'use strict';

var express = require('express'),
    url = require('url');

var router = express.Router();

router.post('/', function (req, res) {
    var email = req.body.email;
    var username = req.body.username;

    res.render('profile', {email: email, username: username});
});

module.exports = router;
