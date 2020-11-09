(function () {
"use strict";

angular.module('common')
.service('InfoService', InfoService);


InfoService.$inject = ['$http'];
function InfoService($http) {

  var service = this;


  service.saveInfo = function(FName, LName, Email, Phone, FavItem) {
    var UserInfoItem = {};

    console.log("inside the saveInfo service function");

    UserInfoItem.first = FName;
    UserInfoItem.last = LName;
    UserInfoItem.email = Email;
    UserInfoItem.phone = Phone;
    UserInfoItem.favItem = FavItem;

    console.log("useriteminfo is: ",UserInfoItem);

    service.UserInfo = UserInfoItem;
        console.log("service.useriteminfo is: ",service.UserInfo);

  }

/*
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

    var found = [];

    return $http.get(ApiPath + '/menu_items.json')
    .then(function (response) {

      var myresult = response.data.menu_items;
      console.log('my entire result is: ',myresult);

        if (entry !== ""){
          for(var i=0; i<myresult.length; i++){

            if (myresult[i].short_name === entry) {
              console.log('this is the entry found: ',myresult[i]);
              found.push(myresult[i]);  
            }
          }
        }

        //console.log('the entry being returned is ',{});
        return found;
 
    }).
    catch(function(error) {
      console.log("Request unsuccessful");
    });
  };*/
};


})();
