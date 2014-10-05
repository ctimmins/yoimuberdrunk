'use strict';

angular.module('drunkrawlApp')
  .controller('CrawlCtrl', function ($scope, $http, Auth, toaster, Crawls) {
  	$scope.isLoggedIn = Auth.isLoggedIn();

    $scope.crawls = Crawls.getCrawls().$object;

  });

angular.module('drunkrawlApp')
  .controller('CrawlCreateCtrl', function ($scope, $http, $state, toaster, Auth, Crawls) {
    $scope.isLoggedIn = Auth.isLoggedIn();
    $scope.results = [];
    $scope.crawl = {};
    $scope.crawl.selection = [];

    var options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        },
        params = {};

    function handleError(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
    };

    var map = new L.Map('map', {center: new L.LatLng(39.095962936305504, -96.8115234375), zoom: 4});
    var markers = L.markerClusterGroup({ singleMarkerMode: true});
    L.Icon.Default.imagePath = '../assets/images/leaflet';
    var osm = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    var ggl = new L.Google('ROADMAP');
    map.addLayer(ggl);
    map.addControl(new L.Control.Layers( {'OSM':osm, 'Google':ggl}, {}));

    // Get current location for the user
    navigator.geolocation.getCurrentPosition(searchYelp, handleError, options);

    function searchYelp(pos) {
      params.ll = pos.coords.latitude+','+pos.coords.longitude;
      params.term = 'Bars';
      Crawls.searchYelp(params).then(function(res) {
        if(res && !res.error) {
          for(var i = 0; i < res.businesses.length; i++) {
            if(res.businesses[i].location.coordinate) {
              var m = L.marker({ lat: res.businesses[i].location.coordinate.latitude, lng: res.businesses[i].location.coordinate.longitude, name: res.businesses[i].name });
              markers.addLayer(m);
            }
          }
          map.addLayer(markers);
          map.fitBounds(markers.getBounds());
        } else {
          toaster.pop('error', 'Oops! There was an issue', res.error.message);
        }
      });
    };

    $scope.addToSelection = function(bar) {
      if($scope.crawl.selection.indexOf(bar) > -1) {
        $scope.crawl.selection.splice($scope.crawl.selection.indexOf(bar), 1);
      } else {
        $scope.crawl.selection.push(bar);
      }
    };

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
    };

    $scope.createCrawl = function(data) {
      Crawls.create(data).then(function(res) {
        if(res && !res.error) {
          toaster.pop('success', 'Nice! Bar crawl created', 'You just created a new crawl called ' + data.title);
          $state.go('crawls.page', { id: res._id });
        } else {
          toaster.pop('error', 'Oops! There was an issue', res.error.message);
        }
      });
    };

  });

angular.module('drunkrawlApp')
  .controller('CrawlPageCtrl', function ($scope, $http, Auth, toaster, Crawls, crawl) {
    $scope.isLoggedIn = Auth.isLoggedIn();

    $scope.crawl = crawl;
  });