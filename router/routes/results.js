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

            var big5 = watsonResult.tree.children[0].children[0];
            console.log(big5);

            var trait0 = big5.children[0].percentage;
            var trait1 = big5.children[1].percentage;
            var trait2 = big5.children[2].percentage;
            var trait3 = big5.children[3].percentage;
            var trait4 = big5.children[4].percentage;
            var sum = trait0 + trait1 + trait2 + trait3 + trait4;

            if (sum == 0.0) sum = 1.0;
            trait0 = Math.round((trait0 / sum) * 100);
            trait1 = Math.round((trait1 / sum) * 100);
            trait2 = Math.round((trait2 / sum) * 100);
            trait3 = Math.round((trait3 / sum) * 100);
            trait4 = Math.round((trait4 / sum) * 100);

            var Profile = require('../../models/profile');

            var profile = new Profile({
                email: email,
                username: username,
                watsonResult: JSON.stringify(watsonResult)
            });
            profile.save();

            res.render('results', {
                email: email, username: username, watsonResult: watsonResult,
                trait0: trait0, trait1: trait1, trait2: trait2, trait3: trait3, trait4: trait4
            });
        })
        .catch(function (watsonResult) {
            console.log(watsonResult);

            var trait0 = 30;
            var trait1 = 30;
            var trait2 = 30;
            var trait3 = 5;
            var trait4 = 5;

            // don't store into Mongo, since it is not a valid result

            res.render('results', {
                email: email, username: username, watsonResult: watsonResult,
                trait0: trait0, trait1: trait1, trait2: trait2, trait3: trait3, trait4: trait4
            });
        });
});

module.exports = router;
