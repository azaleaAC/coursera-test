(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['MenuService','InfoService','ApiPath'];
function InfoController(MenuService,InfoService,ApiPath) {

  var $ctrl = this;


 $ctrl.getFav = function(userEntry) {
  
  console.log('value of userEntry: ',userEntry)
    MenuService.getFavorite(userEntry).then(
    function(data) {
      var foundItem = data;
      console.log("found item is ",foundItem);

      return foundItem;
      //$ctrl.foundItem = foundItem;

    })
  };


  var UserInfo = InfoService.UserInfo;

  if(UserInfo.length === 0){
      $ctrl.Registered = false;
  }
  else{

      $ctrl.Registered = true;

      console.log("user info first is ",UserInfo[0].first);

      $ctrl.UserInfo = {};

      $ctrl.UserInfo.first = UserInfo[0].first;
      $ctrl.UserInfo.last = UserInfo[0].last;
      $ctrl.UserInfo.email = UserInfo[0].email;
      $ctrl.UserInfo.phone = UserInfo[0].phone;
      $ctrl.UserInfo.favItem = UserInfo[0].favItem;

      console.log("fav item is: ",$ctrl.UserInfo.favItem);

      var found = $ctrl.getFav($ctrl.UserInfo.favItem);
      console.log("final found item is: ",found);

      $ctrl.foundItem = found[0];

      console.log("INFOCTRL: foundItem is :",$ctrl.foundItem);
      $ctrl.basePath = ApiPath;

  }

}

})();
