require ('angular');
require('angular-ui-router');
require('oclazyload');
require('angular-ui-bootstrap');
require('highcharts-ng');
var myApp = angular.module('helloworld', ['ui.router', 'oc.lazyLoad', 'ui.bootstrap', 'highcharts-ng']);
myApp.config(function($stateProvider, $locationProvider, $urlRouterProvider) {
  $stateProvider
      .state({
    name: 'login',
    url: '/login',
    authenticate:false,
    controller:'loginController',
    templateUrl: 'scripts/templates/login.html'
  })
    .state({
    name: 'home',
    url: '',
    abstract:true,
    controller:'homeController',
    templateUrl: 'scripts/templates/home.html'
  })
      .state({
    name: 'home.dashboard',
    url: '/dashboard',
    authenticate:true,
    controller:'dashboardController',
    templateUrl: 'scripts/templates/dashboard.html'
  })
  ;
  $urlRouterProvider.when('', '/dashboard');
  $urlRouterProvider.when('/', '/dashboard');
  //$locationProvider.html5Mode(true);
});
myApp.run(function ($rootScope, $location, $log, $state, $timeout, $http, loginAccess) {
  $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
        if (loginAccess.isLogin() == 403 && toState.authenticate) {
            // User isn’t authenticated
            $state.transitionTo("login");
            event.preventDefault();
        }
        if (loginAccess.isLogin() == 200 && !toState.authenticate) {
            // User isn’t authenticated
            $state.transitionTo("home.dashboard");
            event.preventDefault();
        }
    });
})
.factory('loginAccess', [
        '$http',
        '$rootScope',
        '$timeout',
        require('./scripts/services/userAccess')
    ])
 .factory('loginUser', [
        '$http',
        '$rootScope',
        '$timeout',
        '$state',
        require('./scripts/services/login')
    ])
.controller('loginController', [
    '$scope',
    '$rootScope',
    '$state',
    'loginUser',
    require('./scripts/controllers/login')
])
.controller('homeController', [
    '$scope',
    '$rootScope',
    '$state',
    'loginUser',
    require('./scripts/controllers/home')
])
.controller('dashboardController', [
    '$scope',
    '$rootScope',
    '$state',
    'loginUser',
    require('./scripts/controllers/dashboard')
])
//     myApp.controller('loginController', [ require('./controllers/login')   ])
// .directive
// .factory
//
//'      $rootScope', '$scope','$stateParams','$location', '$state', '$timeout',   '$compile', '$templateRequest',