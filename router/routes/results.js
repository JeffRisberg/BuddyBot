'use strict';

var express = require('express'),
    url = require('url');

var router = express.Router();

router.post('/', function (req, res) {

    var getProfile = require('../../helpers/personality-insights').profile;

    getProfile(req.body)
        .then(function (watsonResults) {
            console.log(watsonResults);
            res.render('results', watsonResults);
        })
        .catch(function (watsonResults) {
            console.log(watsonResults);
            res.render('results', watsonResults);
        });
});

module.exports = router;
