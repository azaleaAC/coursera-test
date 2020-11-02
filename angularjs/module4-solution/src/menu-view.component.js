(function (){
'use strict';

angular.module('MenuApp')
.component('menuView',{
	templateUrl:'src/templates/menu-view.template.html',
	bindings:{
		items: '<'
	}
});


})();