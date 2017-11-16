'use strict';

/**
 * @ngdoc overview
 * @name clientsideApp
 * @description
 * # clientsideApp
 *
 * Main module of the application.
 */
angular
  .module('clientsideApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/product', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl',
        controllerAs: 'product'
      })
      .when('/kategori', {
        templateUrl: 'views/kategori.html',
        controller: 'KategoriCtrl',
        controllerAs: 'kategori'
      })
      .when('/gudang', {
        templateUrl: 'views/gudang.html',
        controller: 'GudangCtrl',
        controllerAs: 'gudang'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
