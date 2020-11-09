(function () {
"use strict";

angular.module('common')
.service('InfoService', InfoService);


//InfoService.$inject = ['$http'];
function InfoService() {

  var service = this;
  var UserArray = [];


  //service.saveInfo = function(FName, LName, Email, Phone, FavItem) {
  service.saveInfo = function(UserInfo) {
    
    var UserInfoItem = UserInfo;

    console.log("inside the saveInfo service function");

    UserInfoItem.first = FName;
    UserInfoItem.last = LName;
    UserInfoItem.email = Email;
    UserInfoItem.phone = Phone;
    UserInfoItem.favItem = FavItem;

    console.log("INFOSERVICE: useriteminfo is: ",UserInfoItem);

    UserArray.push(UserInfoItem);

    service.UserInfo = UserArray;
        console.log("INFOSERVICE: service.userinfo is: ",service.UserInfo);

  }

};


})();
