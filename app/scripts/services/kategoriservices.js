'use strict';

/**
 * @ngdoc service
 * @name clientsideApp.kategoriServices
 * @description
 * # kategoriServices
 * Factory in the clientsideApp.
 */
angular.module('clientsideApp')
  .factory('kategoriServices', function ($resource, $http) {

    //api services kategori
    return {

      kategoriResource: $resource('http://localhost:8080/api/kategoris'),
      get:function (param, callback){
        return this.kategoriResource.get(param, callback);
      },

      //listkategori services
      listkategori: function(){
        return this.kategoriResource.query();
      },

      //handling simpan & update kategori service
      handlingSimpanUpdate: function(data){
        if(data.idkategori == null){
          return $http.post('http://localhost:8080/api/insertKategori', data);
        }else{
          return $http.put('http://localhost:8080/api/updateKategori/'+data.idkategori, data);
        }
      },

      //handling delete kategori service
      handlingDelete: function(data){
        if(data.idkategori!=null){
          return $http.delete('http://localhost:8080/api/deleteKategori/'+data.idkategori);
        }
      },
    };
  });
