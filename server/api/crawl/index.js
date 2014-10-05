'use strict';

var express = require('express');
var controller = require('./crawl.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

// Crawl bars
router.get('/:id/bars', controller.getBars);
router.post('/:id/bars', controller.addBar);
router.get('/:id/bars/:bar_id', controller.getBarByYelpID);
router.put('/:id/bars/:bar_id', controller.updateBar);
router.delete('/:id/bars/:bar_id', controller.removeBar);

module.exports = router;