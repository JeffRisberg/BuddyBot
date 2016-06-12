'use strict';

var express = require('express'),
    url = require('url');

var similarity = require('../../utilities/similarity');

var router = express.Router();

router.post('/', function (req, res) {
    var email = req.body.email;
    var username = req.body.username;

    var Profile = require('../../models/profile');

    var buddies = [];
    var myProfile = null;

    Profile.find({}, function (error, profiles) {
        profiles.forEach(function (profile) {
            if (profile.email == email && profile.username == username) {
                myProfile = profile;
            }
        });

        profiles.forEach(function (profile) {
            if (profile != myProfile && profile.watsonResult != null) {

                var sim0 = similarity(profile.watsonResult, myProfile.watsonResult, 0);
                var sim1 = similarity(profile.watsonResult, myProfile.watsonResult, 1);
                var sim2 = similarity(profile.watsonResult, myProfile.watsonResult, 2);
            }
            buddies.push({profile: profile, similarity: (sim0 + sim1 + sim2) / 3.0});
        });

        buddies.sort(function (a, b) {
            return (b.similarity - a.similarity);
        });

        var finalBuddies = [];
        buddies.forEach(function (buddy) {

            if (finalBuddies.length < 5) {
                finalBuddies.push(buddy);
            }
        });

        res.render("buddies", {buddies: finalBuddies});
    });
});

module.exports = router;
