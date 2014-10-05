'use strict';

angular.module('drunkrawlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('bars', {
        abstract: true,
        url: '/bars',
        template: '<ui-view/>'
      })
      .state('bars.index', {
        url: '/explore',
        templateUrl: 'app/bar/views/bars-index.html',
        controller: 'BarIndexCtrl'
      })
      .state('bars.page', {
        url: '/:id',
        templateUrl: 'app/bar/views/bars-page.html',
        controller: 'BarPageCtrl',
        resolve: {
          bar: function($stateParams, Bars) {
            return Bars.getBar($stateParams.id);
          }
        }
      });
  });