'use strict';

var express = require('express'),
    url = require('url');

var router = express.Router();

router.get('/', function (req, res) {
  res.render('profile', {});
});

module.exports = router;
