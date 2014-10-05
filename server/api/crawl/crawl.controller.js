'use strict';

var _ = require('lodash');
var Crawl = require('./crawl.model');
var Bar = require('../bar/bar.model');

// Get list of crawls
exports.index = function(req, res) {
  Crawl.find(function (err, crawls) {
    console.log(crawls);
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
  console.log(req.body);
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
  for(bar in req.body.bars){
    Bar.findOne({ id: bar.id }, function(err, bar) {
      if (err) {
        return handleError(res, err);
      }
      if (!bar) {
        Bar.create(bar, function(err, bar) {
          if (err) {
            return handleError(res, err);
          }
          Crawl.findByIdAndUpdate(req.params.id, { $push: { itinerary: { bar: bar._id } } }, function(err, crawl) {
            if (err) {
              return handleError(res, err);
            }
          });
        });
      }
      else {
        Crawl.findByIdAndUpdate(req.params.id, { $push: { itinerary: { bar: bar.bar_id, } } }, function(err, crawl) {
          if (err) {
            return handleError(res, err);
          }
        });
      }
    });
  }
};

exports.getBars = function(req, res) {
<<<<<<< HEAD

  Crawl.findById(req.params.id, function(err, crawl)
        .populate('itinerary.bar')
        .exec(function (err, crawl){
          return res.json(200, crawl);
        });       
=======
  Crawl.findById(req.params.id).populate('bars')
    .exec(function(err, crawl) {
    if(err) { return handleError(res, err); }
    if(!bars) { return res.json(404, res); }
    return res.json(200, bars);
  });
>>>>>>> a314831dd563949cb4d14f5322cc56155f6f85e5
};

exports.getBarByYelpID = function(req, res) {
  Crawl.findById(req.params.id).populate('bars')
    .exec(function(err, crawl) {
      if(err) { return handleError(res, err); }
      if(!crawl) { return res.json(404, res); }
      var query = _.find(crawl.bars, function(bar) {
        return bar.id = req.params.bar_id;
      });
      return res.json(200, query);
    });
};

exports.updateBar = function(req, res) {
  Crawl.findById(req.id, function(err, crawl){
    crawl.itinerary.fin
  })
};

exports.removeBar = function(req, res) {

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