'use strict';

var myApp = angular.module('myApp', ['ngResource', 'ngAnimate', 'ui.router', 'system', 'toons']);

myApp.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    // For unmatched routes:
    $urlRouterProvider.otherwise('/');

    // Remove trailing slashes from URLs so that both trailing and non-trailing slashes match the same route
    $urlRouterProvider.rule(function ($injector, $location) {
      var path = $location.url();

      // check to see if the path has a trailing slash
      if ('/' === path[path.length - 1]) {
        return path.replace(/\/$/, '');
      }

      if (path.indexOf('/?') > 0) {
        return path.replace('/?', '?');
      }

      return false;
    });

    // states for my app
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'modules/system/views/index.html'
      });
  }
])
  .config(['$locationProvider',
    function($locationProvider) {
      $locationProvider.hashPrefix('!');
    }
  ]);
