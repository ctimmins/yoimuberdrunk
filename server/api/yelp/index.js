'use strict';

var express = require('express');
var controller = require('./yelp.controller');

var router = express.Router();

router.get('/', controller.yelpSearch);
// router.get('/', function(req, res){
// 	res.send("ayyyyy");
// });

module.exports = router;