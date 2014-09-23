'use strict';

angular.module('toons').config(['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('list', {
        url: '/toons',
        templateUrl: 'toons/views/list.html'
      })
      .state('create', {
        url: '/toons/create',
        templateUrl: 'toons/views/create.html'
      })
      .state('create.step1', {
        url: '/step1',
        templateUrl: 'toons/views/partials/create.first.step.html'
      })
      .state('create.step2', {
        url: '/step2',
        templateUrl: 'toons/views/partials/create.second.step.html'
      })
      .state('edit', {
        url: '/toons/:toonId/edit',
        templateUrl: 'toons/views/edit.html'
      })
      .state('view', {
        url: '/toons/:toonId',
        templateUrl: 'toons/views/view.html'
      })
  }
])
