(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {

  var $ctrl = this;

  $ctrl.favItem = "";
  $ctrl.Invalid = false;
  $ctrl.success = "";


 $ctrl.getFav = function() {
 	console.log('sending ', $ctrl.favItem, ' as argument');
  	$ctrl.foundItem = MenuService.getFavorite($ctrl.favItem);
  	console.log('found item is: ',$ctrl.foundItem);
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
