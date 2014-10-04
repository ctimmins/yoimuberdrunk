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
    }
  };
}]);