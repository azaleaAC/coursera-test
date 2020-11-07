(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService']
function SignUpController(MenuService) {
  
  var $ctrl = this;

  $ctrl.Invalid = false;


 $ctrl.getFav = function(MenuService) {
  	var Sctrl.foundItem = MenuService.getFavorite($ctrl.user.fav);
  }

  $ctrl.Invalid = function(MenuService) {
  	if($ctrl.foundItem == []){
  		return true;
  	}
  	else{
  		return false;
  	}

  }

}

})();
