'use strict';

var _ = require('lodash');
var Crawl = require('./crawl.model');
var config = require('../../config/environment');

//Initialize yelp client
var yelp = require("yelp").createClient({
  consumer_key: config.yelp.consumer_key, 
  consumer_secret: config.yelp.consumer_secret,
  token: config.yelp.token,
  token_secret: config.yelp.token_secret
});

// Get list of crawls
exports.index = function(req, res) {
  Crawl.find(function (err, crawls) {
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

//Use the Yelp API to return a list of bars and relevant information
exports.yelpSearch = function(req, res) {

}

function handleError(res, err) {
  return res.send(500, err);
}