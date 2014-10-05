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
  .controller('CrawlEditItinerary', function ($scope, $http, $state, toaster, Auth, Crawls, crawl) {
    $scope.crawl = crawl;

    console.log($scope.crawl);

    $scope.crawl.selection = [];

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

      initialize: function() {
        map.on('zoomend', function(event) {
          mapFeatures.zoomChange(event);
        });
        //mapFeatures.getCurrentLocation();
      },

      trackLocation: function() {
        $scope.watchId = navigator.geolocation.watchPosition(onSuccess, onError, navOptions)

        function onSuccess(location) {
          var lat = location.coords.latitude;
          var lng = location.coords.longitude;
          var latlng = L.latlng(lat, lng);
          map.panTo(latlng);
        }

        function onError(error){
          alert('Error with Map');
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
      markers: {
        m1: {
          lat: 50,
          lng: 0,
          icon: {
            type: 'markerAwesome',
            icon: 'beer',
            markerColor: 'red',
            iconColor: '#FFFFFF'
          }
        }
      },
      bounds: bounds
    });

   //--------------------------------------------------------//
   //------------------  Map Event Handling  ----------------//
   //--------------------------------------------------------//

    //on map load
    $scope.$on("leafletDirectiveMap.load", function(event, args){
      $scope.markers.m1.lat = args.leafletEvent.target.getCenter().lat;
      $scope.markers.m1.lng = args.leafletEvent.target.getCenter().lng;
      console.log("clicked!");
    });
    console.log(leafletDirectiveMap)

    $scope.$on("leafletDirectiveMap.move", function(event, args){
       //console.log($scope.markers);
       console.log($scope.center);
    });
    $scope.$on("leafletDirectiveMap.click", function(event, args){
      console.log(event);
      console.log(args);
    })
    $scope.crawl = crawl;
    $scope.crawl.selection = [];

    $scope.findNearbyBars = function(){}

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
  });

angular.module('drunkrawlApp')
  .controller('CrawlPageCtrl', function ($scope, $http, Auth, toaster, Crawls, crawl) {
    $scope.isLoggedIn = Auth.isLoggedIn();

    $scope.crawl = crawl;
  });