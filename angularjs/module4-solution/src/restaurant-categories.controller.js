(function (){
'use strict';

angular.module('RestaurantMenu')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['myCategories'];
function CategoriesController(myCategories){

	var categories = this;
	//categories.items = [];

	categories.short_name = myCategories.short_name;
	categories.name = myCategories.name;



	//temp - all below
	console.log("this is running!");

	categories.$onInit = function(){
		var cancel = $rootScope.$on('$stateChangeError',
			function(event, toState, toParams, fromState, fromParams, error){
				console.log("event: ", event, ", toState: ", toState, ", toParams: ",
					toParams, ", fromState: ", fromState, ", fromParams: ", fromParams,
					"error: ", error);
			});
	};

	categories.$onDestroy = function(){
		cancel();
	}
}


})();