'use strict';

angular.module('drunkrawlApp')
  .controller('BarIndexCtrl', function ($scope, $http, toaster, Auth, Crawls, Bars) {
    $scope.isLoggedIn = Auth.isLoggedIn();

    $scope.bars = {};
    $scope.bars.recent = Bars.getSortedBars({bars: 'desc'}).$object;
    $scope.bars.popular = Bars.getSortedBars({dateCreated: 'desc'}).$object;

  });

angular.module('drunkrawlApp')
  .controller('BarPageCtrl', function ($scope, $http, toaster, Auth, Crawls, Bars, bar) {
    $scope.isLoggedIn = Auth.isLoggedIn();

    $scope.bar = bar;

  });
