(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService']
function SignUpController(MenuService) {
  
  var $ctrl = this;

  $ctrl.favItem = "";
  $ctrl.Invalid = false;
  $ctrl.success = "";


 $ctrl.getFav = function() {
 	console.log("It's coming into the function!");
  	$ctrl.foundItem = MenuService.getFavorite($ctrl.favItem);
  	console.log($ctrl.foundItem);
  }

  $ctrl.Invalid = function(MenuService) {
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
