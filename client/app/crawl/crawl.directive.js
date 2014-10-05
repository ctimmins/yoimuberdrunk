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

      Crawls.getBarYelpID(crawl._id, bar.id).then(function(res) {
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
            Crawls.removeBar(crawl._id, bar._id).then(function(res) {
              if(res && !res.error) {
                toaster.pop('success', 'Removed bar', 'You just removed ' + scope.bar.name);
                scope.inCrawl = false;
                scope.btn.class = 'btn-success';
                scope.btn.icon = 'glyphicon-plus';
                scope.btn.text = 'Add to crawl';
                scope.crawl.selection.splice(scope.crawl.selection.indexOf(bar), 1);
              } else {
                toaster.pop('error', 'Oops! There was an issue', res.error.message);
              }
            });
          } else {
            Bars.checkBarById(bar.id).then(function(res) {
              if(res) {
                scope.inCollection = true;
                Crawls.addBar(crawl._id, bar._id).then(function(res) {
                  if(res && !res.error) {
                    toaster.pop('success', 'Nice, add bar', 'You just added ' + scope.bar.name);
                    scope.inCrawl = true;
                    scope.btn.class = 'btn-success';
                    scope.btn.icon = 'glyphicon-ok';
                    scope.btn.text = 'In crawl';
                    scope.crawl.selection.push(bar);
                  } else {
                    toaster.pop('error', 'Oops! There was an issue', res.error.message);
                  }
                });
              } else {
                Bars.create(bar).then(function(res) {
                  if(res && !res.error) {
                    Crawls.addBar(crawl._id, res._id).then(function(res) {
                      if(res && !res.error) {
                        toaster.pop('success', 'Nice, add bar', 'You just added ' + scope.bar.name);
                        scope.inCrawl = true;
                        scope.btn.class = 'btn-success';
                        scope.btn.icon = 'glyphicon-ok';
                        scope.btn.text = 'In crawl';
                        scope.crawl.selection.push(bar);
                      } else {
                        toaster.pop('error', 'Oops! There was an issue', res.error.message);
                      }
                    });
                  } else {
                    toaster.pop('error', 'Oops! There was an issue', res.error.message);
                  }
                });
              }
            });
          }
        }
      });
    }
  }
}]);