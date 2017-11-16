'use strict';

/**
 * @ngdoc function
 * @name clientsideApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the clientsideApp
 */
angular.module('clientsideApp')
  .controller('ProductCtrl', function ($scope, productServices, gudangServices) {

      //functional scope get list produk
      $scope.productList = productServices.listproduk();
      $scope.produk = {};
      $scope.gudang = {};
      $scope.gudangList = gudangServices.listGudangs();

      //functional scope handling open modal form
      $scope.openFormProduk = function(){
        $scope.produk = {};
      };

      //functional scope get edit
      $scope.editProduct = function(data){
        $scope.produk = data;
      }

      //functional scope combobox api gudang
      $scope.comboboxGudang = gudangServices.listGudangs();

      //function scope handling simpan update produk
      $scope.handlingSimpanUpdates = function(response){
        console.log(response);
        productServices.handlingSimpanUpdate($scope.produk).then(sukses, gagal);

        function sukses(response){
          alert('sukses ' + response);
          console.log(response);
          $('#formProduct').modal('hide');
          $scope.produk = {};
          $scope.productList = productServices.listproduk();
        };

        function gagal(response){
            alert('gagal '+ response);
            console.log(response);
        };

      };
  });
