(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService'];
function SignUpController(MenuService) {

  var $ctrl = this;

  $ctrl.foundItem = "";
  $ctrl.Invalid = false;
  $ctrl.success = "";


 $ctrl.getFav = function(userEntry) {
 	console.log('sending ', userEntry, ' as argument');
  	var myResponse = MenuService.getFavorite(userEntry);
  	console.log('myresponse is ',myResponse);
  	console.log('response.$state is', myResponse.$state);
	//$ctrl.foundItem = myResponse.$state.value;
  	//console.log('response is ',$ctrl.foundItem);
  	//console.log('found item is: ',$ctrl.foundItem);
  }

  $ctrl.Invalid = function() {
  	if($ctrl.foundItem == {}){
  		$ctrl.success = "Your information has been saved."
  		return true;
  	}
  	else{
  		return false;
  	}

  }

}

})();
