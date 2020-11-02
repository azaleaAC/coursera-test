(function (){
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider','$urlRouterProvider'];
function RoutesConfig($stateProvider,$urlRouterProvider){

	//Redirect to home page if no other URL matches
	$urlRouterProvider.otherwise('/');

	//Set up UI states
	$stateProvider

	//Home Page
	.state('home',{
		url:'/',
		templateUrl: 'src/templates/home.template.html',
		//template: '<a ui-sref="categories">See the Categories for our Menu Items!</a>',
	})


	//Categories
	.state('categories',{
		url:'/categories',
		templateUrl: 'src/templates/categories-view.template.html',
		controller: 'CategoriesController as categories',
		resolve:{
			myCategories: ['MenuDataService', function(MenuDataService){
				return MenuDataService.getAllCategories();
			}]
		}
	})


	//Menu Items
	.state('items',{
		url:'/menu-items/{shortname}',
		templateUrl: 'src/templates/menu-view.template.html',
		controller: 'MenuController as menu',
		resolve:{
			myItems: ['MenuDataService','$stateParams', 
				function(MenuDataService, $stateParams){
				return MenuDataService.getItemsForCategory($stateParams.shortname);
			}]
		}
	})

}


})();