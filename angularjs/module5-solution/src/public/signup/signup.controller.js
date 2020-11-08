(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {

  var $ctrl = this;

  $ctrl.foundItem = "";
  $ctrl.Invalid = false;
  $ctrl.InvalidMsg = "";
  $ctrl.success = "";


 $ctrl.getFav = function(userEntry) {
 	MenuService.getFavorite(userEntry).then(
 		function(data) {
 			foundItem = data;
 			console.log("found item is ",foundItem);


 			$ctrl.Invalid(foundItem);

 		})
  }

  $ctrl.Invalid = function(ItemFound) {
  	console.log("running function invalid() with foundItem: ",ItemFound);
  	if(ItemFound !== {}){

  		var $ctrl.success = "Your information has been saved."
  		var $ctrl.InvalidMsg = "";

  		return true;

  	}
  	else{
  		$ctrl.InvalidMsg = "Please enter a valid Short Name for the your favorite dish.";
  		return false;
  	}


  		console.log("success msg: ",$ctrl.success);
  		console.log("invalidmsg: ",$ctrl.InvalidMsg);
  }

}

})();
