'use strict';

angular.module('drunkrawlApp')
.factory('Profiles', function(Restangular) {
  return {
    getCrawls: function() {
      return Restangular.one('users', id).all('crawls').getList();
    },
    getProfile: function(id) {
      return Restangular.one('users', id).get();
    }
  };
});