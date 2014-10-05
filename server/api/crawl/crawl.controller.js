'use strict';

var _ = require('lodash');
var Crawl = require('./crawl.model');
var Bar = require('../bar/bar.model');

// Get list of crawls
exports.index = function(req, res) {
  Crawl.find( function (err, crawls) {
    console.log(crawls);
    if(err) { return handleError(res, err); }
    return res.json(200, crawls);
  });
};

// Get list of crawls sorted
exports.indexSort = function(req, res) {
  Crawl.find().sort({ participants: req.query.participants, dateCreated: req.query.dateCreated })
    .exec(function (err, crawls) {
    if(err) { return handleError(res, err); }
    return res.json(200, crawls);
  });
};

// Get a single crawl
exports.show = function(req, res) {
  Crawl.findById(req.params.id, function (err, crawl) {
    if(err) { return handleError(res, err); }
    if(!crawl) { return res.send(404); }
    return res.json(crawl);
  });
};

// Creates a new crawl in the DB.
exports.create = function(req, res) {
  Crawl.create(req.body, function(err, crawl) {
    if(err) { return handleError(res, err); }
    return res.json(201, crawl);
  });
};

// Updates an existing crawl in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Crawl.findById(req.params.id, function (err, crawl) {
    if (err) { return handleError(res, err); }
    if(!crawl) { return res.send(404); }
    var updated = _.merge(crawl, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, crawl);
    });
  });
};

exports.addBar = function(req, res) {
  Crawl.findByIdAndUpdate(req.params.id, { $push: { bars: { bar: req.body._id } } },
    function(err, crawl) {
      if(err) { return handleError(res, err); }
      if(!crawl) { return res.send(404); }
      return res.json(200, crawl);
    });
};

exports.addParticipant = function(req, res) {
  Crawl.findByIdAndUpdate(req.params.id, { $push: { participants: req.body._id } },
    function(err, crawl) {
      if(err) { return handleError(res, err); }
      if(!crawl) { return res.send(404); }
      return res.json(200, crawl);
    });
};

exports.removeParticipant = function(req, res) {
  Crawl.findByIdAndUpdate(req.params.id, { $pull: { participants: req.body._id } },
    function(err, crawl) {
      if(err) { return handleError(res, err); }
      if(!crawl) { return res.send(404); }
      return res.json(200, crawl);
    });
};

exports.getParticipants = function(req, res) {
  Crawl.findById(req.params.id).populate('participants')
    .exec(function(err, crawl) {
      if(err) { return handleError(res, err); }
      if(!crawl) { return res.send(404); }
      return res.json(200, crawl);
    });
};

exports.addHost = function(req, res) {
  Crawl.findByIdAndUpdate(req.params.id, { $push: { hosts: req.body.user._id } },
    function(err, crawl) {
      if(err) { return handleError(res, err); }
      if(!crawl) { return res.send(404); }
      return res.json(200, crawl);
    });
};

exports.removeHost = function(req, res) {
  Crawl.findByIdAndUpdate(req.params.id, { $pull: { hosts: req.body.user._id } },
    function(err, crawl) {
      if(err) { return handleError(res, err); }
      if(!crawl) { return res.send(404); }
      return res.json(200, crawl);
    });
};

exports.getHosts = function(req, res) {
  Crawl.findById(req.params.id).populate('hosts')
    .exec(function(err, crawl) {
      if(err) { return handleError(res, err); }
      if(!crawl) { return res.send(404); }
      return res.json(200, crawl);
    });
};

exports.removeBar = function(req, res) {
  Crawl.findByIdAndUpdate(req.params.id, { $pull: { bars: { bar: req.params.bar_id } } },
    function(err, crawl) {
      if(err) { return handleError(res, err); }
      if(!crawl) { return res.send(404); }
      return res.json(200, crawl);
    });
};

exports.getBars = function(req, res) {
  Crawl.findById(req.params.id).populate('bars')
    .exec(function(err, crawl) {
    if(err) { return handleError(res, err); }
    if(!bars) { return res.send(404); }
    return res.json(200, bars);
  });
};

exports.updateBar = function(req, res) {
  Crawl.findById(req.params.id, function(err, crawl){
    //crawl.itinerary.fin
  });
};

exports.checkBar = function(req, res) {
  Crawl.findById(req.params.id).populate('bars')
    .exec(function(err, crawl) {
      if(err) { return handleError(res, err); }
      if(!crawl) { return res.send(404); }
      var query = _.find(crawl.bars, function(bar) {
        return bar.id = req.params.bar_id;
      });
      return res.json(200, query);
    });
};

// Deletes a crawl from the DB.
exports.destroy = function(req, res) {
  Crawl.findById(req.params.id, function (err, crawl) {
    if(err) { return handleError(res, err); }
    if(!crawl) { return res.send(404); }
    crawl.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}