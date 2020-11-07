(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {

  var $ctrl = this;

  //$ctrl.favItem = "";
  $ctrl.Invalid = false;
  $ctrl.success = "";


 $ctrl.getFav = function(userEntry) {
 	console.log('sending ', userEntry, ' as argument');
  	var response = MenuService.getFavorite(userEntry);
  	console.log('response is ',response);
  	//console.log('found item is: ',$ctrl.foundItem);
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
