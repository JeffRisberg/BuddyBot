'use strict';

var express = require('express'),
    _ = require('underscore'),
    extend = _.extend,
    pick = _.pick;

var router = express.Router();

var sunburstPayload = function sunburstPayload(req) {
  return pick(req.body, ['profile', 'image']);
};

router.post('/', function (req, res) {
  return res.render('sunburst', {
    ct: req._csrfToken,
    twitterUser: {},
    sunburst: sunburstPayload(req),
    ga: process.env.GOOGLE_ANALYTICS
  });
});

module.exports = router;
