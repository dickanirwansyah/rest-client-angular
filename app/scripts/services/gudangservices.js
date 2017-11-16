'use strict';

/**
 * @ngdoc service
 * @name clientsideApp.gudangServices
 * @description
 * # gudangServices
 * Factory in the clientsideApp.
 */
angular.module('clientsideApp')
  .factory('gudangServices', function ($resource, $http) {

    // api gudang
    return {
      gudangResources: $resource('http://localhost:8080/api/gudangs'),
      get:function(param, callback){
        return this.gudangResources(param, callback);
      },

      listGudangs: function(){
        return this.gudangResources.query();
      },

    };
  });
