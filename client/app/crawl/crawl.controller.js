'use strict';

angular.module('drunkrawlApp')
  .controller('CrawlCtrl', function ($scope, $http, Auth, toaster, Crawls) {
  	$scope.isLoggedIn = Auth.isLoggedIn();

    $scope.crawls = Crawls.getCrawls().$object;

  });

angular.module('drunkrawlApp')
  .controller('CrawlCreateCtrl', function ($scope, $http, $state, toaster, Auth, Crawls) {
    $scope.isLoggedIn = Auth.isLoggedIn();
    $scope.crawl = {};

    $scope.createCrawl = function(data) {
      Crawls.create(data).then(function(res) {
        console.log(res);
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
  .controller('CrawlEditItinerary', function ($scope, $http, $state, toaster, Auth, Crawls, crawl) {
    $scope.crawl = crawl;
    $scope.crawl.selection = [];

    console.log($scope.crawl);

    L.Icon.Default.imagePath = '/assets/images/leaflet';
    var map = new L.Map('map', {center: new L.LatLng(39.095962936305504, -96.8115234375), zoom: 12});
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

      getCurrentLocation: function() {
        console.log('location');
        navigator.geolocation.getCurrentPosition(mapFeatures.onSuccess, mapFeatures.onError, mapFeatures.navOptions);
      },
      initialize: function(){
        map.on('zoomend', function(event) {
          mapFeatures.zoomChange(event);
        });
        mapFeatures.getCurrentLocation();
      },

      onSuccess: function(location) {
        console.log(location);
        var lat = location.coords.latitude;
        var lng = location.coords.longitude;
        var latlng = L.latLng(lat, lng);
        map.setView(latlng);
      },

      onError: function(error) {
        alert('Error with Map');
      },

      trackLocation: function() {
        $scope.watchId = navigator.geolocation.watchPosition(mapFeatures.onSuccess, mapFeatures.onError, mapFeatures.onSuccess, mapFeatures.onError, mapFeatures.navOptions);
      },

      stopTrackingLocation: function() {
        navigator.geolocation.clearWatch($scope.watchId);
      },

      zoomChange: function(e) {
        var bounds = e.target.getBounds(),
            zoom = e.target.getBoundsZoom(bounds),
            sw_lat = bounds._southWest.lat,
            sw_lng = bounds._southWest.lng,
            ne_lat = bounds._northEast.lat,
            ne_lng = bounds._northEast.lng,
            params = {},
            coords = [];
        params.bounds = sw_lat+','+sw_lng+'|'+ne_lat+','+ne_lng;
        params.term = "bars";
        Crawls.searchYelp(params).then(function(res) {
          if(res && !res.error) {
            $scope.results = res.businesses;
            for(var i = 0; i < res.businesses.length; i++) {
              if(res.businesses[i].location.coordinate) {
                var m = L.marker({ lat: res.businesses[i].location.coordinate.latitude, lng: res.businesses[i].location.coordinate.longitude, title: res.businesses[i].name });
                coords.push({lat: res.businesses[i].location.coordinate.latitude, lng: res.businesses[i].location.coordinate.longitude});
                m.addTo(map);
              }
            }
            //map.fitBounds(new L.latLngBounds(coords));
          } else {
            toaster.pop('error', 'Oops! There was an issue', res.error.message);
          }
        });
      }
    };
    mapFeatures.initialize();

    $scope.complete = function() {
      var bar;
      for(var i = 0; i < $scope.crawl.selection.length; i++) {
        bar = $scope.crawl.selection[i];
        Bars.checkBarById(bar.id).then(function(res) {
          console.log(res);
          console.log(bar);
          if(res && !res.error) {
            console.log('no error');
            scope.inCollection = true;
            Crawls.addBar(crawl._id, bar).then(function(res) {
              if(res && !res.error) {
                toaster.pop('success', 'Nice, add bar', 'You just added ' + scope.bar.name);
                scope.inCrawl = true;
                scope.btn.class = 'btn-success';
                scope.btn.icon = 'glyphicon-ok';
                scope.btn.text = 'In crawl';
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
                    toaster.pop('success', 'Nice, add bar', 'You just added ' + scope.bar.name);
                    scope.inCrawl = true;
                    scope.btn.class = 'btn-success';
                    scope.btn.icon = 'glyphicon-ok';
                    scope.btn.text = 'In crawl';
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
  })

angular.module('drunkrawlApp')
  .controller('CrawlPageCtrl', function ($scope, $http, Auth, toaster, Crawls, crawl) {
    $scope.isLoggedIn = Auth.isLoggedIn();

    $scope.crawl = crawl;
  });