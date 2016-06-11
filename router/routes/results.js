'use strict';

var express = require('express'),
    url = require('url');

var router = express.Router();

router.post('/', function (req, res) {
    var email = req.body.email;
    var username = req.body.username;

    var getProfile = require('../../helpers/personality-insights').profile;

    getProfile(req.body)
        .then(function (watsonResult) {
            console.log(watsonResult);

            var Profile = require('../../models/profile');

            var profile = new Profile({
                "email": email,
                username: username,
                watsonResult: JSON.stringify(watsonResult)
            });
            profile.save();

            res.render('results', watsonResult);
        })
        .catch(function (watsonResult) {
            console.log(watsonResult);

            // don't store into Mongo, since it is not a valid result

            res.render('results', watsonResult);
        });
});

module.exports = router;
