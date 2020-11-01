(function (){
'use strict';

angular.module('RestaurantMenu')
.component('menuView',{
	templateUrl:'src/templates/menu-view.template.html',
	bindings:{
		items: '<'
	}
});


})();