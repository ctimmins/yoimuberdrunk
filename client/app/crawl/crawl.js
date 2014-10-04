'use strict';

angular.module('drunkrawlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('crawls', {
        url: '/crawls',
        templateUrl: 'app/crawl/views/crawl.html',
        controller: 'CrawlCtrl'
      })
      .state('crawls.page', {
        url: '/:id',
        templateUrl: 'app/crawl/views/crawl-page.html',
        controller: 'CrawlPageCtrl'
      })
      .state('crawls.create', {
        url: '/create',
        templateUrl: 'app/crawl/views/crawl-create.html',
        controller: 'CrawlCreateCtrl'
      });
  });

  // .state 'crawl' = list of crawls
  //.state ' crawl.page' = individual crawl
  //. state 'crawl.create' = create crawl