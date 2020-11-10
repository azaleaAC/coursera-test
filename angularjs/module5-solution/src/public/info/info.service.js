(function () {
"use strict";

angular.module('common')
.service('InfoService', InfoService);


function InfoService() {

  var service = this;
  var UserArray = [];
  UserArray.length = 0;

  service.UserInfo = [];
  service.UserInfo.length = 0;



  service.saveInfo = function(UserInfo) {
    
    var UserInfoItem = UserInfo;

    console.log("inside the saveInfo service function");


    console.log("INFOSERVICE: useriteminfo is: ",UserInfoItem);

    UserArray.push(UserInfoItem);

    service.UserInfo = UserArray;
        console.log("INFOSERVICE: service.userinfo is: ",service.UserInfo);

  }

};


})();
