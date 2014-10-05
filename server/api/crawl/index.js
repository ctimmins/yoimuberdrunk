'use strict';

var express = require('express');
var controller = require('./crawl.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/?', controller.indexSort);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.patch('/:id', controller.update);
router.delete('/:id', controller.destroy);

// Crawl bars
router.get('/:id/bars', controller.getBars);
router.get('/:id/check/:bar_id', controller.checkBar);
router.post('/:id/bars', controller.addBar);
router.put('/:id/bars/:bar_id', controller.updateBar);
router.delete('/:id/bars/:bar_id', controller.removeBar);

// Participants
router.get('/:id/participants', controller.getParticipants);
router.post('/:id/participants', controller.addParticipant);
router.delete('/:id/participants/:user_id', controller.removeParticipant);

// Hosts
router.get('/:id/hosts', controller.getHosts);
router.post('/:id/hosts', controller.addHost);
router.delete('/:id/hosts/:user_id', controller.removeHost);

module.exports = router;