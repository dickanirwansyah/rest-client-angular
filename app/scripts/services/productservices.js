'use strict';

/**
 * @ngdoc service
 * @name clientsideApp.productServices
 * @description
 * # productServices
 * Factory in the clientsideApp.
 */
angular.module('clientsideApp')
  .factory('productServices', function ($resource, $http) {

    // product services api
    return {
      produkResource: $resource('http://localhost:8080/api/produks'),
      get: function(param, callback){
        return this.produkResource.get(param, callback);
      },

      //list produks
      listproduk: function(){
        return this.produkResource.query();
      },

      //handling simpan & update
      handlingSimpanUpdate: function(data){
        if(data.idproduk == null){
          return $http.post('http://localhost:8080/api/insertProduk', data);
        }else{
          return $http.put('http://localhost:8080/api/updateProduk/'+data.idproduk, data);
        }
      },


    };
  });
