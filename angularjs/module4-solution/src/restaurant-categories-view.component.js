(function (){
'use strict';

angular.module('RestaurantMenu')
.component('categoryView',{
	templateUrl:'src/templates/categories-items.template.html',
	bindings:{
		items: '<'
	}
});


})();