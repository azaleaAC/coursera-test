(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService','$scope'];
function SignUpController(MenuService,$scope) {

  var $ctrl = this;

  $ctrl.foundItem = "";
  $ctrl.Invalid = false;
  $ctrl.InvalidMsg = "";
  $ctrl.success = "";


 $ctrl.getFav = function(userEntry) {
 	MenuService.getFavorite(userEntry).then(
 		function(data) {
 			$ctrl.foundItem = data;
 			console.log("found item is ",$ctrl.foundItem);


 			$ctrl.Invalid($ctrl.foundItem);

 		})
  }

  $ctrl.Invalid = function(ItemFound) {
  	console.log("running function invalid() with foundItem: ",ItemFound);
  	if(ItemFound !== {}){
  		$ctrl.success = "Your information has been saved."
  		$ctrl.InvalidMsg = "";

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
