(function (){
'use strict';

angular.module('RestaurantMenu')
.component('menuItems',{
	templateUrl:'src/templates/menu-items.template.html',
	bindings:{
		items: '<'
	}
});


})();