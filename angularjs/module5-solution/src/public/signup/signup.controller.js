(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {

console.log("CONTROLLER: tostring: ",MenuService.toString(), "actual value : ", MenuService);

  var $ctrl = this;

  var MenuDataService = MenuService;

  $ctrl.favItem = "";
  $ctrl.Invalid = false;
  $ctrl.success = "";


 $ctrl.getFav = function(MenuDataService) {
 	console.log("GETFAV: tostring: ",MenuDataService.toString(), "actual value : ", MenuService);

  	$ctrl.foundItem = MenuDataService.getFavorite($ctrl.favItem);
  	console.log($ctrl.foundItem);
  }

  $ctrl.Invalid = function() {
  	if($ctrl.foundItem == []){
  		$ctrl.success = "Your information has been saved."
  		return true;
  	}
  	else{
  		return false;
  	}

  }

}

})();
