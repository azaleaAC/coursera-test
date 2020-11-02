(function (){
'use strict';

angular.module('MenuApp')
.controller('MenuController', MenuController);

MenuController.$inject = ['$rootScope','myItems'];
function MenuController($rootScope,myItems){

	var menu = this;
	menu.items = myItems;


	var cancellers = [];

	menu.$onInit = function(){

		var cancel = $rootScope.$on('$stateChangeStart',
			function(event, toState, toParams, fromState, fromParams, options){
				console.log('stateChangeStart!');
			})
			cancellers.push(cancel);


		 cancel = $rootScope.$on('$stateChangeSuccess',
			function(event, toState, toParams, fromState, fromParams){
				console.log("stateChangeSuccess!")

			})
				cancellers.push(cancel);


		 cancel = $rootScope.$on('$stateChangeError',
			function(event, toState, toParams, fromState, fromParams, error){
				console.log("event: ", event, ", toState: ", toState, ", toParams: ",
					toParams, ", fromState: ", fromState, ", fromParams: ", fromParams,
					"error: ", error);
			});

			cancellers.push(cancel);
	};

	menu.$onDestroy = function(){
		cancellers.forEach(function (item){
			item();
		}); 
	};
}


})();