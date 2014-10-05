'use strict';

angular.module('drunkrawlApp')
.factory('Bars', function(Restangular) {
  return {
    create: function(data) {
      return Restangular.all('bars').post(data);
    },
    remove: function(id) {
      return Restangular.one('bars', id).delete();
    },
    edit: function(id, data) {
      return Restangular.one('bars', id).put(data);
    },
    getBars: function() {
      return Restangular.all('bars').getList();
    },
    checkBarById: function(id) {
      return Restangular.all('bars').one('check', id).get();
    },
    getBar: function(id) {
      return Restangular.one('bars', id).get();
    }
  };
});