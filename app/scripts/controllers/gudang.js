'use strict';

/**
 * @ngdoc function
 * @name clientsideApp.controller:GudangCtrl
 * @description
 * # GudangCtrl
 * Controller of the clientsideApp
 */
angular.module('clientsideApp')
  .controller('GudangCtrl', function ($http, $scope, gudangServices) {

    $scope.gudangList = gudangServices.listGudangs();
    $scope.selectedGudang = {};

  });
