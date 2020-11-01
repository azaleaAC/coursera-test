(function (){
'use strict';

angular.module('RestaurantMenu')
.component('categoryItems',{
	templateUrl:'src/templates/category-items.template.html',
	bindings:{
		items: '<'
	}
});


})();