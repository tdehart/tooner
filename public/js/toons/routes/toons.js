'use strict';

angular.module('toons').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('all toons', {
        url: '/toons',
        templateUrl: 'js/toons/views/list.html'
      })
      .state('create toon', {
        url: '/toons/create',
        templateUrl: 'js/toons/views/create.html'
      })
      .state('edit toon', {
        url: '/toons/:toonId/edit',
        templateUrl: 'js/toons/views/edit.html'
      })
      .state('toon by id', {
        url: '/toons/:toonId',
        templateUrl: 'js/toons/views/view.html'
      })
  }
])