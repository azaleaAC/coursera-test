(function () {
"use strict";

angular.module('common')
.service('InfoService', InfoService);


function InfoService() {

  var service = this;
  
  service.UserInfo = [];


  service.saveInfo = function(UserInfo) {
    
    var UserInfoItem = UserInfo;

    service.UserInfo.push(UserInfoItem);

  }

};


})();
