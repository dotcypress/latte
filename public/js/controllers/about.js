define(['app', 'services/api'], function(app) {
  app.register.controller('AboutCtrl', function($scope, TimeService) {
    TimeService.get(function(result) {
      $scope.time = result.time;
    });
  });
});
