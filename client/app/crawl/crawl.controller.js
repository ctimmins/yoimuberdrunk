'use strict';

angular.module('drunkrawlApp')
  .controller('CrawlCtrl', function ($scope, $http, Auth, Crawls) {
  	$scope.isLoggedIn = Auth.isLoggedIn();
    $scope.crawls = Crawls.getCrawls().$object;

  });
