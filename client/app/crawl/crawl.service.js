'use strict';

angular.module('drunkrawlApp')
.factory('Crawls', function(Restangular) {
  return {
    create: function(data) {
      return Restangular.all('crawls').post(data);
    },
    remove: function(id) {
      return Restangular.one('crawls', id).delete();
    },
    getCrawls: function() {
      return Restangular.all('crawls').getList();
    },
    getSortedCrawls: function(query) {
      return Restangular.all('crawls').getList(query);
    },
    getCrawl: function(id) {
      return Restangular.one('crawls', id).get();
    },
    addBar: function(id, bar) {
      return Restangular.one('crawls', id).all('bars').post(bar);
    },
    removeBar: function(id, bar) {
      return Restangular.one('crawls', id).one('bars', bar).delete();
    },
    getBar: function(id, bar) {
      return Restangular.one('crawls', id).one('bars', bar).get();
    },
    checkBar: function(id, bar) {
      return Restangular.one('crawls', id).one('check', bar).get();
    },
    getParticipants: function(id) {
      return Restangular.one('crawls', id).all('participants').getList();
    },
    addParticipant: function(id, user) {
      return Restangular.one('crawls', id).all('participants').post(user);
    },
    removeParticipant: function(id, user_id) {
      return Restangular.one('crawls', id).one('participants', user_id).remove();
    },
    searchYelp: function(params) {
      return Restangular.all('yelp').customGET('search', params);
    },
    uberPriceEstimate: function(params) {
      return Restangular.all('uber').customGET('estimates/price', params);
    },
    uberTimeEstimate: function(params) {
      return Restangular.all('uber').customGET('estimates/price', params);
    },
    uberDeeplink: function(params) {
      return Restangular.all('uber').customGET('pickup', params);
    }
  };
});