(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {

  var $ctrl = this;

  $ctrl.foundItem = "";
  $ctrl.ValidEntry = true;
  $ctrl.InvalidMsg = "";
  $ctrl.successMsg = "";


 $ctrl.getFav = function(userEntry) {
 	MenuService.getFavorite(userEntry).then(
 		function(data) {
 			var foundItem = data;
 			console.log("found item is ",foundItem);


 			$ctrl.ValidEntry = $ctrl.Valid(foundItem);

 		})
  }

  $ctrl.Valid = function(ItemFound) {
  	console.log("running function invalid() with foundItem: ",ItemFound);
  	console.log("check 1: length is: ",ItemFound.length);
  	//var $ctrl.success;
  	//var $ctrl.InvalidMsg;

  	console.log("check 2: length is: ",ItemFound.length);

  	if(ItemFound.length === 0){
  		console.log("empty");
		$ctrl.InvalidMsg = "Please enter a valid Short Name for the your favorite dish.";
  		return false;
 

  	}
  	else{
  		console.log("length is good.")
  		$ctrl.successMsg = "Your information has been saved."
  		$ctrl.InvalidMsg = "";

  	}

  	/*var $ctrl.success = success;
  	var $ctrl.InvalidMsg = InvalidMsg;*/

  		console.log("success msg: ",$ctrl.successMsg,'. length is :',$ctrl.successMsg.length);
  		console.log("invalidmsg: ",$ctrl.InvalidMsg);
  	/*	console.log("$ctrl.success: ",$ctrl.success);
  		console.log("$ctrl.InvalidMsg: ",$ctrl.InvalidMsg);*/
  		return true;
  }

}

})();
