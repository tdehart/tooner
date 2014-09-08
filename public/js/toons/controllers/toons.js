'use strict';

angular.module('toons').controller('ToonsController', ['$scope', '$stateParams', '$location', 'Toons',
  function($scope, $stateParams, $location, Toons) {
    $scope.find = function() {
      Toons.query(function(toons) {
        $scope.toons = toons;
      });
    };
  }
]);