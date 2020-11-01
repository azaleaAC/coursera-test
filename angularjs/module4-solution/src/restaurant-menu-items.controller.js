(function (){
'use strict';

angular.module('RestaurantMenu')
.controller('MenuController', MenuController);

MenuController.$inject = ['items'];
function MenuController(items){

	var menu = this;
	//menu.items = [];

	//menu.name = menuItems.name;
	//menu.short_name = menuItems.name;
	//menu.description = menuItems.description;
}


})();