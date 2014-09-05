'use strict';

// angular.element(document).ready(function() {
//   //Fixing facebook bug with redirect
//   if (window.location.hash === '#_=_') window.location.hash = '#!';

//   //Then init the app
//   angular.bootstrap(document, ['myApp']);

// });

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