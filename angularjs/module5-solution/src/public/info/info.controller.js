(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['InfoService'];
function InfoController(InfoService) {

  var $ctrl = this;

  $ctrl.UserInfo = InfoService.UserInfo;
  console.log('$ctrl.UserInfo is: ',$ctrl.UserInfo);

  if($ctrl.UserInfo.length === 0){
          $ctrl.Registered = false;
  }
  else{
      $ctrl.Registered = true;
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
