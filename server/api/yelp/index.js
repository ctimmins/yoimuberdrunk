'use strict';

var express = require('express');
var controller = require('./yelp.controller');

var router = express.Router();

router.get('/search', controller.yelpSearch);

module.exports = router;