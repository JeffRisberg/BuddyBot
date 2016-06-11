'use strict';

var express = require('express'),
    url = require('url');

var router = express.Router();

router.post('/', function (req, res) {
    var email = req.body.email;
    var username = req.body.username;

    var Profile = require('../../models/profile');

    var buddies = [];

    Profile.find({}, function (error, profiles) {
        profiles.forEach(function (profile) {

            if (profile.email != email && profile.username != username) {
                buddies.push({email: profile.email, username: profile.username});
            }
        })
    })

    //buddies.push({name: 'Abraham Lincoln', id: 4});
    //buddies.push({name: 'Mahatma Gandhi', id: 6});
    //buddies.push({name: 'John Lennon', id: 7});

    res.render("buddies", {buddies: buddies});
});

module.exports = router;
