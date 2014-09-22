'use strict';

var myApp = angular.module('myApp', ['ngResource', 'ngAnimate', 'ui.router', 'system', 'toons']);

myApp.config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    // For unmatched routes:
    $urlRouterProvider.otherwise('/');

    // states for my app
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'js/system/views/index.html'
      });
  }
])
  .config(['$locationProvider',
    function($locationProvider) {
      $locationProvider.hashPrefix('!');
    }
  ]);