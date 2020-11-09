(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['InfoService'];
function InfoController(InfoService) {

  var $ctrl = this;


  //$ctrl.UserInfo = {};
  /*$ctrl.UserInfo.first = InfoService.UserInfo.first;
  console.log("INFOCTRL: first is: ", InfoService.UserInfo.first);*/

  var UserInfo = InfoService.UserInfo;
  console.log('$ctrl.UserInfo is: ',UserInfo);


  if(UserInfo.length === 0){
      $ctrl.Registered = false;
  }
  else{

      $ctrl.Registered = true;

      var $ctrl.UserInfo = {};
      $ctrl.UserInfo.first = UserInfo.first;
      $ctrl.UserInfo.last = UserInfo.last;
      $ctrl.UserInfo.email = UserInfo.email;
      $ctrl.UserInfo.phone = UserInfo.phone;
      $ctrl.UserInfo.favItem = UserInfo.favItem;

  console.log("fav item is: ",$ctrl.UserInfo.favItem);

  }
  console.log("Registered?:", $ctrl.Registered);

  console.log("Apipath is: ",Apipath);
  $ctrl.basePath = ApiPath;

 $ctrl.getFav = function(userEntry) {
 	MenuService.getFavorite(userEntry).then(
 		function(data) {
 			var foundItem = data;
 			console.log("found item is ",foundItem);


 			$ctrl.foundItem = foundItem;

 		})
  }

}

})();
