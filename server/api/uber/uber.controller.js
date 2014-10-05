'use strict';

var config = require('../../config/environment');
var User = require('../user/user.model');
var request = require('request');
var querystring = require('querystring');

var	client_id = config.uber.client_id,
	client_secret = config.uber.uber_secret,
	server_token = config.uber.server_token,
	redirect_uri = config.uber.redirect_uri,
	name = config.uber.name,
	scope = "",
	authorize_url = 'https://login.uber.com/oauth/authorize',
  access_token_url = 'https://login.uber.com/oauth/token';

exports.authorize = function(req, res){
	var userId = req.params.id;
	res.redirect(authorize_url + 
		querystring.stringify({
      response_type: 'code',
      client_id: client_id,
      scope: scope,
      state: userId,
      redirect_uri: redirect_uri
    })
  );
}

exports.callback = function(req, res){
	var code = req.query.code;
	var userId = req.query.state;

	var authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: redirect_uri,
      grant_type: 'authorization_code',
      client_id: client_id,
      client_secret: client_secret
    },
    json: true
  };

  request.post(authOptions, function(error, response, body) {
  	if(!error && response.statusCode === 200) {
  		var access_token = body.access_token,
  			refresh_token = body.refresh_token;
  			User.findByIdAndUpdate(userId, {uber_access_token: access_token, uber_refresh_token: refresh_token});
  	}
  });
}


