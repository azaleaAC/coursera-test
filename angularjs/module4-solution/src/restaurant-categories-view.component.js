(function (){
'use strict';

angular.module('MenuApp')
.component('categoryView',{
	templateUrl:'src/templates/categories-items.template.html',
	bindings:{
		items: '<'
	}
});


})();