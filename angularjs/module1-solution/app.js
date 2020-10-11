(function (){
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
	$scope.menuItems = "";
	$scope.message = "";

	$scope.checkIfTooMuch = function() {

		if($scope.menuItems == "")
			$scope.message = "Please enter data first"
		else{
			var meals = $scope.menuItems.split(',');

			if (meals.length > 3){
				$scope.message = "Too much!";
			}
			else{
				$scope.message = "Enjoy!";	
			}
		}
	}
}


})();