define(['angularAMD', 'angular-route'], function(angularAMD, angularRoute) {
  var app = angular.module('latte', ['ngRoute', 'ngResource']);
  app.config(function($routeProvider) {
    $routeProvider
      .when('/', angularAMD.route({
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
        controllerUrl: 'controllers/home'
      }))
      .when('/about', angularAMD.route({
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerUrl: 'controllers/about'
      }))
      .otherwise({
        redirectTo: '/'
      });
  });
  angularAMD.bootstrap(app);
  return app;
});
