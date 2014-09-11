'use strict';

angular.module('toons').factory('sbDataService', ['$http', '$q',
  function($http, $q) {
    var shadowbaneDataService = {};

    shadowbaneDataService.getTraits = function() {
      var deferred = $q.defer();

      $http.get('public/shadowbane-db/starting-traits.json')
        .success(function(data) {
          deferred.resolve(data);
        });
      return deferred.promise;
    };

    shadowbaneDataService.getRaces = function() {
      var deferred = $q.defer();

      $http.get('public/shadowbane-db/races.json')
        .success(function(data) {
          deferred.resolve(data);
        });
      return deferred.promise;
    };

    shadowbaneDataService.getDisciplines = function() {
      var deferred = $q.defer();

      $http.get('public/shadowbane-db/disciplines.json')
        .success(function(data) {
          deferred.resolve(data);
        });
      return deferred.promise;
    };

    shadowbaneDataService.getPrestigeClasses = function() {
      var deferred = $q.defer();

      $http.get('public/shadowbane-db/prestige-classes.json')
        .success(function(data) {
          deferred.resolve(data);
        });
      return deferred.promise;
    };

    return shadowbaneDataService;
  }
]);


