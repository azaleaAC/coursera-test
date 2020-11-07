(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService']
function SignUpController(MenuService) {
  
  var $ctrl = this;

  $ctrl.Invalid = false;
  $ctrl.success = "";


 $ctrl.getFav = function(MenuService) {
  	var $ctrl.foundItem = MenuService.getFavorite($ctrl.user.fav);
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
