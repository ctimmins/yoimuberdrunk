'use strict'

var express = require('express');
var controller = require('./uber.controller');

var router = express.Router();

router.get('/products', controller.products);
router.get('/estimates/price', controller.priceEstimate);
router.get('/estimates/time', controller.timeEstimate);


module.exports = router;