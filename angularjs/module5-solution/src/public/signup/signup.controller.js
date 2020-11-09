(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$scope','MenuService','InfoService'];
function SignUpController($scope,MenuService,InfoService) {

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


 $ctrl.getFav = function(userDetails) {

 	$scope.user = userDetails;

 	MenuService.getFavorite(userDetails.favItem).then(
 		function(data) {
 			var foundItem = data;

 			$ctrl.ValidEntry = $ctrl.Valid(foundItem);

 		})
  }

  $ctrl.Valid = function(ItemFound) {

  	if(ItemFound.length === 0){
		  $ctrl.InvalidMsg = "No such menu number exists.";
  		return false;
  	}
  	else{
  		InfoService.saveInfo($scope.user);
  		
  		$ctrl.successMsg = "Your information has been saved."
  		$ctrl.InvalidMsg = "";
  	}
  	
  		return true;
  }

}

})();
