(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {

console.log("CONTROLLER: tostring: ",MenuService.toString(), "actual value : ", MenuService);

  var $ctrl = this;

  MenuService = MenuService;

  $ctrl.favItem = "";
  $ctrl.Invalid = false;
  $ctrl.success = "";


 $ctrl.getFav = function() {
 	console.log("GETFAV: tostring: ",MenuService.toString(), "actual value : ", MenuService);

  	$ctrl.foundItem = MenuService.getFavorite($ctrl.favItem);
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
