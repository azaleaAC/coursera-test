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
    console.log('looking for ',category);

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      console.log(response.data);
      return response.data;
    });
  };



  service.getFavorite = function(entry) {

    //var found = [];

    /*var config = {};
    if(entry) {
      config.params = {'short_name': entry};
    }
*/
    return $http.get(ApiPath + '/menu_items.json')
    .then(function (response) {

      var myresult = response.data.menu_items;
      console.log('my entire result is: ',myresult);

        if (entry !== ""){
          for(var i=0; i<myresult.length; i++){

            if (myresult[i].short_name === entry) {
              console.log('this is the entry found: ',myresult[i]);
              return myresult[i];  
            }
          }
        }

        return [];
 
    });
  };
};


})();
