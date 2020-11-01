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
		templateUrl: 'src/templates/home.template.html',
		//template: '<a ui-sref="categories">See the Categories for our Menu Items!</a>',
		controller: 'HomeController as home'
	})


	//Categories
	.state('categories',{
		url:'/categories',
		templateUrl: 'src/templates/categories-view.template.html',
		controller: 'CategoriesController as categories',
		resolve:{
			myCategories: ['CategoriesService', function(CategoriesService){
				return CategoriesService.getCategories();
			}]
		}
	})


	//Menu Items
	.state('items',{
		url:'/menu-items/{shortname}',
		templateUrl: 'src/templates/menu-view.template.html',
		controller: 'MenuController as menu',
		resolve:{
			items: ['$stateParams','MenuSearchService', 
				function($stateParams, MenuSearchService){
				return MenuSearchService.getItems($stateParams.shortname);
			}]
		}
	})
}


})();