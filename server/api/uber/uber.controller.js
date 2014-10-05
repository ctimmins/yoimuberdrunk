'use strict';

var config = require('../../config/environment');
var User = require('../user/user.model');
var request = require('request');
var querystring = require('querystring');

var server_token = config.uber.server_token;
var client_id = config.uber.client_id;
var baseUrl = 'https://api.uber.com/v1/';

exports.products = function(req,res){
  var lat = req.query.lat,
      lng = req.query.lng;
  var qsdata = {"latitude": lat, "longitude": lng}
  var options = {url: baseUrl+'products',
                 qs: qsdata,
                 headers: {Authorization: "Token "+server_token}
               }
  request.get(options, function(e,r,body){
    res.json(body);
  });
};

exports.priceEstimate = function(req, res){
  var qsdata = {
    "start_latitude": req.query.slat,
    "start_longitude": req.query.slng,
    "end_latitude": req.query.elat,
    "end_longitude": req.query.elng
  }
  //res.json(qsdata);
  var options = {url: baseUrl+'estimates/price',
                 qs: qsdata,
                 headers: {Authorization: "Token "+server_token}
               }
  request.get(options, function(e,r,body){
    if(e) return handleError(e, r);
    if(!body) { return res.send(404); }
    return res.json(200, body);
  });

};

exports.timeEstimate = function(req,res){
  var qsdata = {
    "start_latitude": req.query.slat,
    "start_longitude": req.query.slng
  }
  var options = {url: baseUrl+'estimates/time',
                 qs: qsdata,
                 headers: {Authorization: "Token "+server_token}
               }
  request.get(options, function(e,r,body){
    if(e) return handleError(e, r);
    if(!body) { return res.send(404); }
    return res.json(200, body);
  });

};

function handleError(res, err) {
  return res.json(500, err);
}