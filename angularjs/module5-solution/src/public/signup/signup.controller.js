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


	console.log('GETFAV: the value of $ctrl.user is :',userDetails);
 	/*console.log('GETFAV: the value of $ctrl.user.first is :',userDetails.first);*/

 	$scope.user = userDetails;
 	//console.log("scope.user is:",$scope.user);

 	MenuService.getFavorite(userDetails.favItem).then(
 		function(data) {
 			var foundItem = data;

 			$ctrl.ValidEntry = $ctrl.Valid(foundItem);
 			console.log('value of valid entry is: ',$ctrl.ValidEntry);

 		})
  }

  $ctrl.Valid = function(ItemFound) {
  	//console.log("running function invalid() with foundItem: ",ItemFound);
  		//console.log('check 1: the value of $ctrl.user is :',$scope.user);

  	if(ItemFound.length === 0){
		$ctrl.InvalidMsg = "No such menu number exists.";
  		return false;
 

  	}
  	else{
  		//console.log('check 2: the value of $ctrl.user.first is :',$scope.user.first);
  		
  		InfoService.saveInfo($scope.user);
  		//InfoService.saveInfo($ctrl.user.first, $ctrl.user.last, $ctrl.user.email, $ctrl.user.phone, $ctrl.user.favItem);
  		
  		$ctrl.successMsg = "Your information has been saved."
  		$ctrl.InvalidMsg = "";

  	}
  	
  		return true;
  }

}

})();
