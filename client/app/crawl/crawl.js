'use strict';

angular.module('drunkrawlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('crawl', {
        url: '/crawls',
        templateUrl: 'app/crawl/views/crawl.html',
        controller: 'CrawlCtrl'
      })
      .state('crawl.page', {
        url: '/:id',
        templateUrl: 'app/crawl/views/crawl-page.html',
        controller: 'CrawlPageCtrl'
      });
      .state('crawl.create', {
        url: '/:id',
        templateUrl: 'app/crawl/views/crawl-create.html',
        controller: 'CrawlPageCtrl'
      });
  });

  // .state 'crawl' = list of crawls
  //.state ' crawl.page' = individual crawl 
  //. state 'crawl.create' = create crawl 