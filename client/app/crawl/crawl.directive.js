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
            scope.crawl.bars.splice(scope.crawl.bars.indexOf(bar), 1);
          } else {
            console.log('add');
            scope.crawl.selection.push(bar);
          }
        }
      });
    }
  }
}]);