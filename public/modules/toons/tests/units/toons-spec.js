describe('ToonsController', function() {

  beforeEach(module('myApp'));

  it('should instantiate a toons model', inject(function($controller) {
    var scope = {},
        controller = $controller('ToonsController', {$scope: scope});

    expect(scope.toons.length).toBe(2);
  }));

});