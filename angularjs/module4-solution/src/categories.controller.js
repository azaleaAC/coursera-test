(function (){
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['myCategories','$rootScope'];
function CategoriesController(myCategories, $rootScope){

	var categories = this;
	categories.items = myCategories;
	


	var cancellers = [];

	categories.$onInit = function(){

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

	categories.$onDestroy = function(){
		cancellers.forEach(function (item){
			item();
		}); 
	};
};


})();