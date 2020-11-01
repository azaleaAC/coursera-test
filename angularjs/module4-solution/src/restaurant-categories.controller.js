(function (){
'use strict';

angular.module('RestaurantMenu')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['myCategories','$rootScope'];
function CategoriesController(myCategories, $rootScope){

	var categories = this;
	categories.items = [];
	
	//temp
	console.log("I am in the Categories controller.  'myCategories' =", myCategories)

	//categories.short_name = myCategories.short_name;
	//categories.name = myCategories.name;



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