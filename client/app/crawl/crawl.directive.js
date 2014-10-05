'use strict';

angular.module('drunkrawlApp')
.directive('btnCrawlAction', ['Crawls', 'Bars', 'Auth', 'toaster', function(Crawls, Bars, Auth, toaster) {
  return {
    restrict: 'A',
    scope: {
      crawl: '=',
      location: '='
    },
    template: '<button class="btn {{btn.class}}" role="button"><span class="glyphicon {{btn.icon}}"></span>{{btn.text}}</button>',
    link: function(scope, element, attr) {
      var crawl = scope.crawl,
          bar = scope.location;
      scope.btn = {};
      scope.btn.class = 'btn-success';
      scope.btn.icon = 'glyphicon-plus'
      scope.btn.text = 'Add to crawl';
      scope.inCollection = false;
      scope.inCrawl = false;

      console.log(crawl);

      Crawls.checkBar(crawl._id, bar.id).then(function(res) {
        if(res) {
          scope.btn.text = 'In crawl';
          scope.btn.icon = 'glyphicon-ok';
          scope.inCrawl = true;
        }
      });

      return element.bind({
        mouseenter: function() {
          if(scope.inCrawl) {
            scope.$apply(function() {
              scope.btn.class = 'btn-danger';
              scope.btn.icon = 'glyphicon-remove';
              scope.btn.text = 'Remove bar';
            });
          }
        },
        mouseleave: function() {
          if(scope.inCrawl) {
            scope.$apply(function() {
              scope.btn.class = 'btn-success';
              scope.btn.icon = 'glyphicon-ok';
              scope.btn.text = 'In crawl';
            });
          }
        },
        click: function() {
          if(scope.inCrawl) {
            console.log('remoev');
            scope.crawl.selection.splice(scope.crawl.selection.indexOf(bar), 1);
          } else {
            console.log('add');
            scope.crawl.selection.push(bar);
          }
        }
      });
    }
  }
}]);

angular.module('drunkrawlApp')
.directive('btnJoinCrawl', ['Crawls', 'Bars', 'Auth', 'toaster', function(Crawls, Bars, Auth, toaster) {
  var user = Auth.getCurrentUser();

  return {
    restrict: 'A',
    scope: {
      crawl: '=',
      user: '='
    },
    template: '<button class="btn {{btn.class}}" role="button"><span class="glyphicon {{btn.icon}}"></span>{{btn.text}}</button>',
    link: function(scope, element, attr) {
      var crawl = scope.crawl,
          user = scope.user;
      scope.btn = {};
      scope.btn.class = 'btn-success';
      scope.btn.icon = 'glyphicon-plus'
      scope.btn.text = 'Join crawl';
      scope.inCrawl = false;

      Crawls.checkUser(crawl._id, user._id).then(function(res) {
        if(res && !res.error) {
          scope.btn.text = 'In crawl';
          scope.btn.icon = 'glyphicon-ok';
          scope.inCrawl = true;
        }
      });

      return element.bind({
        mouseenter: function() {
          if(scope.inCrawl) {
            scope.$apply(function() {
              scope.btn.class = 'btn-danger';
              scope.btn.icon = 'glyphicon-remove';
              scope.btn.text = 'Leave crawl';
            });
          }
        },
        mouseleave: function() {
          if(scope.inCrawl) {
            scope.$apply(function() {
              scope.btn.class = 'btn-success';
              scope.btn.icon = 'glyphicon-ok';
              scope.btn.text = 'In crawl';
            });
          }
        },
        click: function() {
          if(scope.inGame) {
            Crawls.removeParticipant(crawl._id, user._id).then(function(res) {
              if(res && !res.error) {
                toaster.pop('success', 'Left crawl', 'You just left ' + scope.crawl.name);
                scope.inCrawl = false;
                scope.btn.class = 'btn-success';
                scope.btn.icon = 'glyphicon-plus';
                scope.btn.text = 'Join crawl';
                scope.crawl.participants.splice(scope.crawl.participants.indexOf(user), 1);
              } else {
                toaster.pop('error', 'Oops! There was an issue', res.error.message);
              }
            });
          } else {
            Crawl.addParticipant(crawl._id, user._id).then(function(res) {
              if(res && !res.error) {
                toaster.pop('success', 'Great success! Joined crawl', 'You just joined ' + scope.crawl.name);
                scope.inCrawl = true;
                scope.btn.class = 'btn-success';
                scope.btn.icon = 'glyphicon-ok';
                scope.btn.text = 'In crawl';
                scope.crawl.participants.push(user);
              } else {
                toaster.pop('error', 'Oops! There was an issue', res.error.message);
              }
            });
          }
        }
      });
    }
  }
}]);