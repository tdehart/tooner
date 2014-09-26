'use strict';

angular.module('toons').factory('sbDataService', ['$http', '$q',
  function($http, $q) {
    var shadowbaneDataService = {};

    shadowbaneDataService.getTraits = function() {
      var deferred = $q.defer();

      $http.get('lib/shadowbane-db/starting-traits.json')
        .success(function(data) {
          deferred.resolve(data);
        });
      return deferred.promise;
    };

    shadowbaneDataService.getBaseClasses = function() {
      var deferred = $q.defer();

      $http.get('lib/shadowbane-db/base-classes.json')
        .success(function(data) {
          deferred.resolve(data);
        });
      return deferred.promise;
    };    

    shadowbaneDataService.getRaces = function() {
      var deferred = $q.defer();

      $http.get('lib/shadowbane-db/races.json')
        .success(function(data) {
          deferred.resolve(data);
        });
      return deferred.promise;
    };

    shadowbaneDataService.getDisciplines = function() {
      var deferred = $q.defer();

      $http.get('lib/shadowbane-db/disciplines.json')
        .success(function(data) {
          deferred.resolve(data);
        });
      return deferred.promise;
    };

    shadowbaneDataService.getPrestigeClasses = function() {
      var deferred = $q.defer();

      $http.get('lib/shadowbane-db/prestige-classes.json')
        .success(function(data) {
          deferred.resolve(data);
        });
      return deferred.promise;
    };

    shadowbaneDataService.getStatRunes = function() {
      var deferred = $q.defer();

      $http.get('lib/shadowbane-db/stat-runes.json')
        .success(function(data) {
          deferred.resolve(data);
        });
      return deferred.promise;
    };

    shadowbaneDataService.getMasteryRunes = function() {
      var deferred = $q.defer();

      $http.get('lib/shadowbane-db/mastery-runes.json')
        .success(function(data) {
          deferred.resolve(data);
        });
      return deferred.promise;
    };

    return shadowbaneDataService;
  }
]);
