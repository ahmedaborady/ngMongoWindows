'use strict';

/**
 * @ngdoc overview
 * @name iconApp02App
 * @description
 * # iconApp02App
 *
 * Main module of the application.
 */
angular
  .module('iconApp02App', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  })
  .factory('Mongo',function($resource){
    var Mongo = $resource('https://api.mongolab.com/api/1/databases/icondb/collections/members/:id',{apiKey:'ADC72CZaYJG4KMTcRrxjyiNzcUAJ568P'},{update:{method:'PUT'}})
    return {
      database : Mongo
    };
  });

//icondb/collections/members/:id
