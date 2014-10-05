'use strict';

angular.module('drunkrawlApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profiles', {
        abstract: true,
        url: '/users',
        template: '<ui-view/>'
      })
      .state('profiles.page', {
        url: '/:id',
        templateUrl: 'app/profile/views/profile-page.html',
        controller: 'ProfilePageCtrl',
        resolve: {
          profile: function($stateParams, Profiles) {
            return Restagular.getProfile($stateParams.id);
          }
        }
      });
  });