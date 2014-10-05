'use strict';

var _ = require('lodash');
var Bar = require('./bar.model');

// Get list of bars
exports.index = function(req, res) {
  console.log(req.query);
  Bar.find( function(err, bars) {
    if(err) { return handleError(res, err); }
    return res.json(200, bars);
  });
};

// Get list of bars sorted
exports.indexSort = function(req, res) {
  Bar.find().sort({ bars: req.query.bars, dateCreated: req.query.dateCreated })
    .exec(function (err, bars) {
    if(err) { return handleError(res, err); }
    return res.json(200, bars);
  });
};

// Get a single bar
exports.show = function(req, res) {
  Bar.findById(req.params.id, function (err, bar) {
    if(err) { return handleError(res, err); }
    if(!bar) { return res.send(404); }
    return res.json(bar);
  });
};

// Creates a new bar in the DB.
exports.create = function(req, res) {
  Bar.create(req.body, function(err, bar) {
    if(err) { return handleError(res, err); }
    return res.json(201, bar);
  });
};

exports.getBarByYelpID = function(req, res) {
  Bar.findOne({ id: req.params.id }, function(err, bar) {
    console.log(bar);
    if(err) { return handleError(res, err); }
    if(!bar) { return res.json(200, {"error":{"text":"Bar not in collection"}}); }
    return res.json(200, bar);
  });
};

// Updates an existing bar in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Bar.findById(req.params.id, function (err, bar) {
    if (err) { return handleError(res, err); }
    if(!bar) { return res.send(404); }
    var updated = _.merge(bar, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, bar);
    });
  });
};

// Deletes a bar from the DB.
exports.destroy = function(req, res) {
  Bar.findById(req.params.id, function (err, bar) {
    if(err) { return handleError(res, err); }
    if(!bar) { return res.send(404); }
    bar.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}