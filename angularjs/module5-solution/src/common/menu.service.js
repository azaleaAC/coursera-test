(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };



  service.getFavorite = function(entry) {

    console.log('entry is: ',entry);
    var config = {};
    if(entry) {
      config.params = {'short_name': entry};
    }

    return $http.get(ApiPath + '/menu_items.json', config)
    .then(function (response) {
      console.log('response data is: ',response.data); 
      return response.data;
    })
    .catch(function (error) {
      return [];
    });
  };
}






})();
