(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['InfoService'];
function InfoController(InfoService) {

  var $ctrl = this;

  $ctrl.RegMsg="";


  $ctrl.UserInfo = InfoService.UserInfo;
  console.log('$ctrl.UserInfo is: ',$ctrl.UserInfo);

  if($ctrl.UserInfo.length === 0){
          $ctrl.RegMsg = "Your information has been saved."
  }

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
