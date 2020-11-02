(function (){
'use strict';

angular.module('MenuApp')
.controller('MenuController', MenuController);

MenuController.$inject = ['myItems'];
function MenuController(myItems){

	var menu = this;
	menu.items = myItems;

	console.log("the menu items are: ",menu.items);
}


})();