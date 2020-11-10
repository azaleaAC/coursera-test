(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['MenuService','InfoService','ApiPath'];
function InfoController(MenuService,InfoService,ApiPath) {

  var $ctrl = this;


 $ctrl.getFav = function(userEntry) {
  
    MenuService.getFavorite(userEntry).then(
    function(data) {
      var foundItem = data;

      $ctrl.foundItem = foundItem[0];

    })
  };


  var UserInfo = InfoService.UserInfo;

  if(UserInfo.length > 1){
    UserInfo.splice(0, 1);
  }

  if(UserInfo.length === 0){
      $ctrl.Registered = false;
  }
  else{

      $ctrl.Registered = true;

      $ctrl.UserInfo = {};

      $ctrl.UserInfo.first = UserInfo[0].first;
      $ctrl.UserInfo.last = UserInfo[0].last;
      $ctrl.UserInfo.email = UserInfo[0].email;
      $ctrl.UserInfo.phone = UserInfo[0].phone;
      $ctrl.UserInfo.favItem = UserInfo[0].favItem;

      $ctrl.getFav($ctrl.UserInfo.favItem);
    
      $ctrl.basePath = ApiPath;

  }

}

})();
