(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService','InfoService','$scope'];
function SignUpController(MenuService,InfoService,$scope) {

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

  $scope.user = $ctrl.user;


 $ctrl.getFav = function(userEntry) {
 	MenuService.getFavorite(userEntry).then(
 		function(data) {
 			var foundItem = data;
 			console.log("found item is ",foundItem);


 			$ctrl.ValidEntry = $ctrl.Valid(foundItem);
 			console.log('value of valid entry is: ',$ctrl.ValidEntry);

 		})
  }

  $ctrl.Valid = function(ItemFound) {
  	//console.log("running function invalid() with foundItem: ",ItemFound);
  		console.log('check 1: the value of $ctrl.user.first is :',$scope.user.first);

  	if(ItemFound.length === 0){
		$ctrl.InvalidMsg = "Please enter a valid Short Name for the your favorite dish.";
  		return false;
 

  	}
  	else{
  		console.log('check 2: the value of $ctrl.user.first is :',$scope.user.first);
  		InfoService.saveInfo($ctrl.user.first, $ctrl.user.last, $ctrl.user.email, $ctrl.user.phone, $ctrl.user.favItem);
  		$ctrl.successMsg = "Your information has been saved."
  		$ctrl.InvalidMsg = "";

  	}
  	
  		return true;
  }

}

})();
