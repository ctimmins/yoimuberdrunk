'use strict';

angular.module('drunkrawlApp')
.factory('Crawls', ['Restangular', function(Restangular) {
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
      return  Restangular.one('crawls', id).one('bars', bar).get();
    },
    searchYelp: function(params) {
      return Restangular.all('yelp').get();
    }
  };
}]);