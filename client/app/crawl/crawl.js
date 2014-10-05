'use strict';

angular.module('drunkrawlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('crawls', {
        abstract: true,
        url: '/crawls',
        template: '<ui-view/>'
      })
      .state('crawls.index', {
        url: '/explore',
        templateUrl: 'app/crawl/views/crawl-index.html',
        controller: 'CrawlCtrl'
      })
      .state('crawls.create', {
        url: '/create',
        templateUrl: 'app/crawl/views/crawl-create.html',
        controller: 'CrawlCreateCtrl'
      })
      .state('crawls.page', {
        url: '/:id',
        templateUrl: 'app/crawl/views/crawl-page.html',
        controller: 'CrawlPageCtrl',
        resolve: {
          crawl: function($stateParams, Crawls) {
            return Crawls.getCrawl($stateParams.id);
          }
        }
      });
  });

  // .state 'crawl' = list of crawls
  //.state ' crawl.page' = individual crawl
  //. state 'crawl.create' = create crawl