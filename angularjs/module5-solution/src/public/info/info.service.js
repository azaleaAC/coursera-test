(function () {
"use strict";

angular.module('common')
.service('InfoService', InfoService);


function InfoService() {

  var service = this;
  
  service.UserInfo = [];


  service.saveInfo = function(UserInfo) {
    
    var UserInfoItem = UserInfo;

    console.log("inside the saveInfo service function");


    console.log("INFOSERVICE: useriteminfo is: ",UserInfoItem);

    service.UserInfo.push(UserInfoItem);

    //service.UserInfo = UserArray;
        console.log("INFOSERVICE: service.userinfo is: ",service.UserInfo);

  }

};


})();
