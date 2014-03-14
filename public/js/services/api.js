define(['app'], function(app) {
  app.register.service('TimeService', function($resource) {
    return $resource('/api/time', {});
  });
});
