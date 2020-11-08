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
 			$scope.foundItem = data;
 			console.log("found item is ",$scope.foundItem);
 		})

 	$ctrl.Invalid();
 	/*console.log('sending ', userEntry, ' as argument');
  	var myResponse = MenuService.getFavorite(userEntry);
  	console.log('myresponse is ',myResponse);
  	console.log('response.state is', myResponse.state);
	//$ctrl.foundItem = myResponse.$state.value;
  	//console.log('response is ',$ctrl.foundItem);
  	//console.log('found item is: ',$ctrl.foundItem);*/
  }

  $ctrl.Invalid = function() {
  	console.log("running function invalid() with foundItem: ",$scope.foundItem);
  	if($ctrl.foundItem == {}){
  		$ctrl.success = "Your information has been saved."
  		return true;
  	}
  	else{
  		$ctrl.InvalidMsg = "Please enter a valid Short Name for the your favorite dish.";
  		return false;
  	}

  }

}

})();
