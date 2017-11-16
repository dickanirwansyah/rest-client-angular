'use strict';

/**
 * @ngdoc function
 * @name clientsideApp.controller:KategoriCtrl
 * @description
 * # KategoriCtrl
 * Controller of the clientsideApp
 */
angular.module('clientsideApp')
  .controller('KategoriCtrl', function ($scope, kategoriServices, $http) {

    //listkategori
    $scope.kategoris = kategoriServices.listkategori();
    $scope.selectedKategori = {};

    $scope.title = "Kategori";

    //modal kategori
    $scope.openForm = function(){
      $scope.selectedKategori = null;
    };

    //simpan kategori
    $scope.simpanKategori = function(response){
        console.log(response);
        kategoriServices.handlingSimpanUpdate($scope.selectedKategori).then(sukses, gagal);
        function sukses(response){
          console.log(response);
          $('#formKategori').modal('hide');
          $scope.kategoris = kategoriServices.listkategori();
        };
        function gagal(response){
          $('#formKategori').modal('hide');
          alert('gagal');
        };
    };

    //get edit kategori
    $scope.editKategori = function(data){
      $scope.selectedKategori = data;
    };

    //delete kategori
    $scope.deleteKategori = function(data){
      if(confirm('yakin ingin hapus data ini '+data.idkategori+' ?')){
          console.log(data);
          kategoriServices.handlingDelete(data).then(sukses, gagal);
          function sukses(response){
            console.log(response);
            $scope.kategoris = kategoriServices.listkategori();
          }

          function gagal(response){
            alert('gagal dihapus');
            console.log(response);
          }
      }
    }
  });
