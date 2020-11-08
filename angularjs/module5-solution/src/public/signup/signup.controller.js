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

  	var success;
  	var InvalidMsg;

  	if(ItemFound !== {}){

  		success = "Your information has been saved."
  		InvalidMsg = "";

  		return true;

  	}
  	else{
  		InvalidMsg = "Please enter a valid Short Name for the your favorite dish.";
  		return false;
  	}

  	$ctrl.success = success;
  	$ctrl.InvalidMsg = InvalidMsg;

  		console.log("success msg: ",success,"$ctrl.success: ",$ctrl.success);
  		console.log("invalidmsg: ",InvalidMsg,"$ctrl.InvalidMsg: ",$ctrl.InvalidMsg);
  }

}

})();
