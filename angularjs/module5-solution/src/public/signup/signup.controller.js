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
  	console.log('response.data is', myResponse.data);
  	console.log('response.value is ',myResponse.value);
    console.log('response.d is ', myResponse.d);
    console.log('response.d.value is ', myResponse.d.value);
        console.log('response.d.$$state.value is ', myResponse.d.$$state.value);
        console.log('response.d.$state.value is ', myResponse.d.$state.value);
	$ctrl.foundItem = myResponse.$state.value;
  	console.log('response is ',$ctrl.foundItem);
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
