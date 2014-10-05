'use strict';

angular.module('drunkrawlApp')
  .controller('MainCtrl', function ($scope, $http, Auth, Crawls, Bars) {
    $scope.isLoggedIn = Auth.isLoggedIn();
    $scope.user = Auth.getCurrentUser();
    $scope.crawls = {};
    $scope.crawls.popular = Crawls.getSortedCrawls({participants: 'desc'}).$object;
    $scope.crawls.recent = Crawls.getSortedCrawls({dateCreated: 'desc'}).$object;

  });
