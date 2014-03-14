require.config({
  paths: {
    'jquery': ['http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min', 'vendor/jquery/dist/jquery.min'],
    'lodash': 'vendor/lodash/dist/lodash.min',
    'bootstrap': 'vendor/bootstrap.min',
    'angular': 'vendor/angular/angular.min',
    'angular-route': 'vendor/angular-route/angular-route.min',
    'angular-resource': 'vendor/angular-resource/angular-resource.min',
    'angularAMD': 'vendor/angularAMD/angularAMD.min'
  },
  shim: {
    'jquery': {
      exports: '$'
    },
    'bootstrap': [
      'jquery'
    ],
    'angularAMD': [
      'angular'
    ],
    'angular-route': [
      'angular'
    ],
    'angular-resource': [
      'angular'
    ],
    app: [
      'jquery',
      'bootstrap',
      'angular',
      'angular-resource',
      'angularAMD',
      'angular-route',
    ]
  },
  waitSeconds: 10,
  deps: ['app']
});
