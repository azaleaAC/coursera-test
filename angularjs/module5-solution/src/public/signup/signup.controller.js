(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService','InfoService'];
function SignUpController(MenuService,InfoService) {

  var $ctrl = this;

  $ctrl.foundItem = "";
  $ctrl.ValidEntry = true;
  $ctrl.InvalidMsg = "";
  $ctrl.successMsg = "";

  $ctrl.user = {};
  $ctrl.user.first="";
  $ctrl.user.last="";
  $ctrl.user.email="";
  $ctrl.user.phone="";
  $ctrl.user.favItem="";


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

  	if(ItemFound.length === 0){
  		//console.log("empty");
		$ctrl.InvalidMsg = "Please enter a valid Short Name for the your favorite dish.";
  		return false;
 

  	}
  	else{
  		//console.log("length is good.");
  		console.log($ctrl.user.first);
  		InfoService.saveInfo($ctrl.user.first, $ctrl.user.last, $ctrl.user.email, $ctrl.user.phone, $ctrl.user.favItem);
  		$ctrl.successMsg = "Your information has been saved."
  		$ctrl.InvalidMsg = "";

  	}

  		//console.log("success msg: ",$ctrl.successMsg,'. length is :',$ctrl.successMsg.length);
  		//console.log("invalidmsg: ",$ctrl.InvalidMsg);
  	
  		return true;
  }

}

})();
