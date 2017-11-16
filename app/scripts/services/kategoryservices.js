'use strict';

/**
 * @ngdoc service
 * @name clientsideApp.KategoryServices
 * @description
 * # KategoryServices
 * Factory in the clientsideApp.
 */
angular.module('clientsideApp')
  .factory('KategoryServices', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
