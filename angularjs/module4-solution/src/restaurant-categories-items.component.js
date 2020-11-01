(function (){
'use strict';

angular.module('MenuApp')
.component('categoryItems',{
	templateUrl:'src/templates/category-items.template.html',
	bindings:{
		items: '<'
	}
});


})();