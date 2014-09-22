'use strict';

angular.module('toons').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('all toons', {
        url: '/toons',
        templateUrl: 'toons/views/list.html'
      })
      .state('create toon', {
        url: '/toons/create',
        templateUrl: 'toons/views/create.html'
      })
      .state('edit toon', {
        url: '/toons/:toonId/edit',
        templateUrl: 'toons/views/edit.html'
      })
      .state('toon by id', {
        url: '/toons/:toonId',
        templateUrl: 'toons/views/view.html'
      })
  }
])
