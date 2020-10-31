(function (){
'use strict';

angular.module('RestaurantMenu')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject['categories'];
function CategoriesController(categories){

	var categories = this;
	//categories.items = [];

	categories.short_name = myCategories.short_name;
	categories.name = myCategories.name;

}


})();