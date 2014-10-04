/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Crawl = require('./crawl.model');

exports.register = function(socket) {
  Crawl.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Crawl.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('crawl:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('crawl:remove', doc);
}