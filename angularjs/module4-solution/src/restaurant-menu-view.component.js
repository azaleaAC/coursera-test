(function (){
'use strict';

angular.module('RestaurantMenu')
.component('menuView',{
	templateUrl:'src/templates/menu-items.template.html',
	bindings:{
		items: '<'
	}
});


})();