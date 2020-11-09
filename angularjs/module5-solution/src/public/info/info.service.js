(function () {
"use strict";

angular.module('common')
.service('InfoService', InfoService);


//InfoService.$inject = ['$http'];
function InfoService() {

  var service = this;
  var UserArray = [];


  service.saveInfo = function(FName, LName, Email, Phone, FavItem) {
    var UserInfoItem = {};

    console.log("inside the saveInfo service function");

    UserInfoItem.first = FName;
    UserInfoItem.last = LName;
    UserInfoItem.email = Email;
    UserInfoItem.phone = Phone;
    UserInfoItem.favItem = FavItem;

    console.log("useriteminfo is: ",UserInfoItem);

    UserArray.push(UserInfoItem);

    service.UserInfo = UserArray;
        console.log("service.userinfo is: ",service.UserInfo);

  }

};


})();
