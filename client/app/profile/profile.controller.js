'use strict';

angular.module('drunkrawlApp')
  .controller('ProfilePageCtrl', function ($scope, $http, Auth, Crawls, Bars, Profiles, profile) {
    $scope.isLoggedIn = Auth.isLoggedIn();
    $scope.current_user = Auth.getCurrentUser();
    $scope.profile = profile;
    $scope.profile.crawls = Profiles.getCrawls(profile._id).$object;

  });
