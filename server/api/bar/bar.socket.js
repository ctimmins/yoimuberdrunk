/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Bar = require('./bar.model');

exports.register = function(socket) {
  Bar.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Bar.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('bar:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('bar:remove', doc);
}