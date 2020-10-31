(function (){
'use strict';

angular.module('RestaurantMenu')
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
		templateUrl: 'src/templates/home.template.html'
	})


	//Categories
	.state('categories',{
		url:'categories',
		templateUrl: 'src/templates/categories.template.html',
		controller: 'CategoriesController as category',
		resolve:{
			myCategories: ['CategoriesService', function(CategoriesService){
				return CategoriesService.getCategories();
			}]
		}
	})


	//Menu Items
	.state('menu',{
		url:'menu-items',
		templateUrl: 'src/templates/menu-items.template.html',
		controller: 'MenuController as menu',
		resolve:{
			menuItems: ['MenuSearchService', function(MenuSearchService){
				return MenuSearchService.getItems();
			}]
		}
	})
}


})();