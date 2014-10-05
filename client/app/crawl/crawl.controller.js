'use strict';

angular.module('drunkrawlApp')
  .controller('CrawlCtrl', function ($scope, $http, Auth, toaster, Crawls) {
  	$scope.isLoggedIn = Auth.isLoggedIn();

    $scope.crawls = Crawls.getCrawls().$object;

  });

angular.module('drunkrawlApp')
  .controller('CrawlCreateCtrl', function ($scope, $http, $state, toaster, Auth, Crawls) {
    $scope.isLoggedIn = Auth.isLoggedIn();
    $scope.addingBars = false;
    $scope.results = [];
    $scope.crawl = {};
    $scope.crawl.selection = [];

    $scope.createCrawl = function(data) {
      Crawls.create(data).then(function(res) {
        console.log(res);
        if(res && !res.error) {
          $scope.addingBars = true;
          $scope.crawl._id = res._id;
          $state.go('crawls.create.add');
        } else {
          toaster.pop('error', 'Oops! There was an issue', res.error.message);
        }
      });
    };

  });

angular.module('drunkrawlApp')
  .controller('CrawlEditItinerary', function($scope, $http, $state, toaster, Auth, Crawls) {
    L.Icon.Default.imagePath = '/assets/images/leaflet';
    var map = new L.Map('map', {center: new L.LatLng(39.095962936305504, -96.8115234375), zoom: 14});
    var markers = L.markerClusterGroup({ singleMarkerMode: true});
    var osm = new L.TileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png');
    var ggl = new L.Google('ROADMAP');
    map.addLayer(ggl);
    map.addControl(new L.Control.Layers( {'OSM':osm, 'Google':ggl}, {}));

    var mapFeatures = {
      navOptions: {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 2000
      },

<<<<<<< HEAD
    function searchYelp(pos) {
      params.ll = pos.coords.latitude+','+pos.coords.longitude;
      params.term = 'Bars';
      Crawls.searchYelp(params).then(function(res) {
        if(res && !res.error) {
          for(var i = 0; i < res.businesses.length; i++) {
            if(res.busin/esses[i].location.coordinate) {
              var m = L.marker({ lat: res.businesses[i].location.coordinate.latitude, lng: res.businesses[i].location.coordinate.longitude, name: res.businesses[i].name });
              markers.addLayer(m);
            }
          }
          map.addLayer(markers);
          map.fitBounds(markers.getBounds());
        } else {
          toaster.pop('error', 'Oops! There was an issue', res.error.message);
=======
      initialize: function(){
        map.on('zoomend', function(event) {
          mapFeatures.zoomChange(event);
        });
      },

      trackLocation: function(){
        $scope.watchId = navigator.geolocation.watchPosition(onSuccess, onError, navOptions)

        function onSuccess(location){
          var lat = location.coords.latitude;
          var lng = location.coords.longitude;
          var latlng = L.latlng(lat, lng);
          map.panTo(latlng);
>>>>>>> 34ff059939dbc11e5284c6d10e2e888076faba6e
        }

        function onError(error){
          alert('Error with Map');
        }
      },

      stopTrackingLocation: function(){
        navigator.geolocation.clearWatch($scope.watchId);
      },

      zoomChange: function(e){
        console.log(e);
        var bounds = e.target.getBounds(),
            zoom = e.target.getBoundsZoom(bounds),
            sw_lat = bounds._southWest.lat,
            sw_lng = bounds._southWest.lng,
            ne_lat = bounds._northEast.lat,
            ne_lng = bounds._northEast.lng,
            params = {};
            console.log(bounds);
        params.bounds = sw_lat+','+sw_lng+'|'+ne_lat+','+ne_lng;
        params.term = "bars"
        console.log(params);
        Crawls.searchYelp(params).then(function(res) {
          console.log(res);
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
      }
    };
    mapFeatures.initialize();

    $scope.complete = function() {
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
      toaster.pop('success', 'Nice! You just added some bars to the crawl', 'Added ' + $scope.crawl.selection.length + ' bars to ' + $scope.crawl.name);
      $state.go('crawl.page', { id: crawl._id }, { reload: true });
    };
  })

angular.module('drunkrawlApp')
  .controller('CrawlPageCtrl', function ($scope, $http, Auth, toaster, Crawls, crawl) {
    $scope.isLoggedIn = Auth.isLoggedIn();

    $scope.crawl = crawl;
  });