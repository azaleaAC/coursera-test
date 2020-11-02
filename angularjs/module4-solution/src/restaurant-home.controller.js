(function (){
'use strict';

angular.module('MenuApp')
.controller('HomeController', HomeController);

HomeController.$inject = ['$rootScope'];
function HomeController($rootScope){

	var $ctrl = this;

	$ctrl.$onInit = function(){
		var cancel = $rootScope.$on('$stateChangeError',
			function(event, toState, toParams, fromState, fromParams, error){
				console.log("event: ", event, ", toState: ", toState, ", toParams: ",
					toParams, ", fromState: ", fromState, ", fromParams: ", fromParams,
					"error: ", error);
			});
	};

	$ctrl.$onDestroy = function(){
		cancel();
	}

};


})();