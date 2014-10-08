'use strict';

angular.module('drunkrawlApp')
  .controller('CrawlCtrl', function ($scope, $http, Auth, toaster, Crawls) {
  	$scope.isLoggedIn = Auth.isLoggedIn();

    $scope.crawls = Crawls.getCrawls().$object;

  });

angular.module('drunkrawlApp')
  .controller('CrawlCreateCtrl', function ($scope, $http, $state, toaster, Auth, Crawls) {
    var user = Auth.getCurrentUser();
    $scope.isLoggedIn = Auth.isLoggedIn();
    $scope.crawl = {};

    $scope.createCrawl = function(data) {
      data.hosts = user._id;
      Crawls.create(data).then(function(res) {
        if(res && !res.error) {
          $scope.addingBars = true;
          $scope.crawl._id = res._id;
          $state.go('crawls.create.add', { id: res._id });
        } else {
          toaster.pop('error', 'Oops! There was an issue', res.error.message);
        }
      });
    };

  });

angular.module('drunkrawlApp')
  .controller('CrawlEditItinerary', function ($scope, $http, $state, toaster, Bars, Auth, Crawls, crawl, leafletData) {
    $scope.crawl = crawl;
    console.log(crawl)
    $scope.crawl.selection = [];

    angular.extend($scope, {
      defaults: {
        tileLayer: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        maxZoom: 18,
        path: {
            weight: 10,
            color: '#800000',
            opacity: 1
        }
      },
      center: {
        autoDiscover: true,
        zoom: 12
      },
      bounds: {
        southWest: {
          lat:51.508742458803326,
          lng: -0.087890625,
        },
        northEast: {
          lat:51.508742458803326,
          lng:-0.087890625,
        }
      }
    });

    $scope.markers = new Array();


   //--------------------------------------------------------//
   //---------------Map Event Handling and Function----------//
   //--------------------------------------------------------//

    //on map load
    $scope.$on("leafletDirectiveMap.load", function(event, args){
      $scope.markers.lat = args.leafletEvent.target.getCenter().lat;
      $scope.markers.lng = args.leafletEvent.target.getCenter().lng;
      console.log("clicked!");
    });

    //on map zoom or slide
    $scope.$on("leafletDirectiveMap.moveend", function(event, args){
      getCurrentMapBounds().then(function(bars){
        bars.businesses.forEach(function(bar){
          if (!bar.location.coordinate) return;
          console.log(bar);
          $scope.markers.push({
            lat: bar.location.coordinate.latitude,
            lng: bar.location.coordinate.longitude,
            message: bar.name
          });
        });
      });

    });
    $scope.crawl = crawl;
    $scope.crawl.selection = [];

    function getCurrentMapBounds(){
      return leafletData.getMap().then(function(map) {
        return findNearbyBars(map.getBounds());
      });
    }
    leafletData.getMap().then(function(map) {
      map = map;
      findNearbyBars(map.getBounds());
    });
    function findNearbyBars(bounds) {
      // var sw_lat = bounds._southWest.lat,
      //     sw_lng = bounds._southWest.lng,
      //     ne_lat = bounds._northEast.lat,
      //     ne_lng = bounds._northEast.lng,
          var params = {};
      params.bounds = bounds.southWest.lat+','+bounds.southWest.lng+'|'+bounds.northEast.lat+','+bounds.northEast.lng;
      params.term = "bars"
      return Crawls.searchYelp(params).then(function(res){
        $scope.results = res.businesses;
        return res;
      });
    }

//<<---------------------END MAP FUNCTIONS---------------------->>//

    $scope.complete = function() {
      var bar;
      for(var i = 0; i < $scope.crawl.selection.length; i++) {
        bar = $scope.crawl.selection[i];
        Bars.checkBarById(bar.id).then(function(res) {
          console.log(res);
          console.log(bar);
          if(res && !res.error) {
            console.log('no error');
            $scope.inCollection = true;
            Crawls.addBar(crawl._id, bar).then(function(res) {
              if(res && !res.error) {
                toaster.pop('success', 'Nice, add bar', 'You just added ' + $scope.bar.name);
                $scope.inCrawl = true;
                $scope.btn.class = 'btn-success';
                $scope.btn.icon = 'glyphicon-ok';
                $scope.btn.text = 'In crawl';
              } else {
                toaster.pop('error', 'Oops! There was an issue', res.error.message);
              }
            });
          } else {
            Bars.create(bar).then(function(res) {
              console.log(res);
              if(res && !res.error) {
                Crawls.addBar(crawl._id, res).then(function(res) {
                  if(res && !res.error) {
                    toaster.pop('success', 'Nice, add bar', 'You just added ' + $scope.bar.name);
                    $scope.inCrawl = true;
                    $scope.btn.class = 'btn-success';
                    $scope.btn.icon = 'glyphicon-ok';
                    $scope.btn.text = 'In crawl';
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
      toaster.pop('success', 'Nice! You just added some bars to the crawl', 'Added ' + $scope.crawl.selection.length + ' bars to ' + $scope.crawl.name);
      $state.go('crawl.page', { id: crawl._id }, { reload: true });
    };
  });

angular.module('drunkrawlApp')
  .controller('CrawlPageCtrl', function ($scope, $http, Auth, toaster, Crawls, crawl) {
    $scope.isLoggedIn = Auth.isLoggedIn();

    $scope.crawl = crawl;
  });