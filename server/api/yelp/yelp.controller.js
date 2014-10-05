'use strict';

var _ = require('lodash');
var config = require('../../config/environment');

//Initialize yelp client
var yelp = require("yelp").createClient({
  consumer_key: config.yelp.consumer_key,
  consumer_secret: config.yelp.consumer_secret,
  token: config.yelp.token,
  token_secret: config.yelp.token_secret
});

//Use the Yelp API to return a list of bars and relevant information
exports.yelpSearch = function(req, res) {
  yelp.search(req.query, function(err, results) {
    console.log(results);
    console.log('Query ' + req.query);
    if(err) { return handleError(res, err); }
    return res.json(200, results);
  });
}

function handleError(res, err) {
  return res.json(500, err);
}