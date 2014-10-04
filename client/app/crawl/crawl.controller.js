'use strict';

angular.module('drunkrawlApp')
  .controller('CrawlCtrl', function ($scope, $http, Auth, toaster, Crawls) {
  	$scope.isLoggedIn = Auth.isLoggedIn();
    $scope.crawls = Crawls.getCrawls().$object;

  });

angular.module('drunkrawlApp')
  .controller('CrawlCreateCtrl', function ($scope, $http, $state, toaster, Auth, Crawls) {
    $scope.isLoggedIn = Auth.isLoggedIn();
    $scope.results = {};
    $scope.crawl = {};
    $scope.crawl.selection = [];

    $scope.searchYelp = function(params) {
      Crawls.searchYelp(params).then(function(res) {
        if(res && !res.error) {
          $scope.results = res;
        } else {
          toaster.pop('error', 'Oops! There was an issue', res.error.message);
        }
      });
    }

    $scope.addToSelection = function(bar) {
      if($scope.crawl.selection.indexOf(bar) > -1) {
        $scope.crawl.selection.splice($scope.crawl.selection.indexOf(bar), 1);
      } else {
        $scope.crawl.selection.push(bar);
      }
    }

    $scope.addToCrawl = function(params) {
      for(var i = 0; i < $scope.crawl.selection.length; i++) {
        Crawls.addBar(crawl._id, $scope.crawl.selection[i].id).then(function(res) {
          if(res && !res.error) {
            console.log(res);
          } else {
            toaster.pop('error', 'Oops! There was an error adding to the crawl', res.error.text);
            return res.error;
          }
        });
      }
      toaster.pop('success', 'Nice! You just added some bars to the crawl', 'Added ' + $scope.crawl.selection.length + ' bars to ' + $scope.crawl.title);
      $state.go('crawl.page', { id: crawl._id }, { reload: true });
    }

    $scope.createCrawl = function(data) {
      Crawls.create(data).then(function(res) {
        if(res && !res.error) {
          toaster.pop('success', 'Nice! Bar crawl created', 'You just created a new crawl called ' + data.title);
          $state.go('crawls.page', { id: res._id });
        } else {
          toaster.pop('error', 'Oops! There was an issue', res.error.message);
        }
      });
    }

  });