(function (){
'use strict';

angular.module('RestaurantMenu')
.component('categoryItems',{
	templateUrl:'src/templates/categories.template.html',
	bindings:{
		items: '<'
	}
});


})();