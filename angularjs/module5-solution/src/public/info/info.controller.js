(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['InfoService'];
function InfoController(InfoService) {

  var $ctrl = this;

/*
 $ctrl.getFav = function(userEntry) {
 	MenuService.getFavorite(userEntry).then(
 		function(data) {
 			var foundItem = data;
 			console.log("found item is ",foundItem);


 			$ctrl.foundItem = foundItem;

 		})
  }*/

}

})();
