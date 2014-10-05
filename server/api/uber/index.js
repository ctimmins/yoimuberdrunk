'use strict'

var express = require('express');
var controller = require('./uber.controller');

var router = express.Router();

router.get('/user/:id', controller.authorize);
router.get('/callback', controller.callback);
// router.get('/callback/update', controller.updateUser);

module.exports = router;