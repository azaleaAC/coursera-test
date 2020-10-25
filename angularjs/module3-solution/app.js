(function (){
'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.directive('foundItems',foundItems);	


function foundItems(){
	var ddo = {
		templateUrl: 'listItems.html',
		scope: {
			items: '<',
			onRemove: '&'
		},
		controller: NarrowItDownController,
		controllerAs: 'list',
		bindToController: true
	};

	return ddo;
}



NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
	
	var menu = this;

	menu.searchTerm = "";
	menu.message = "";


	menu.removeItem = function(itemIndex){
		MenuSearchService.removeItem(itemIndex);
	};


	menu.getItems = function(searchTerm){
		
		var promise = MenuSearchService.getMatchedMenuItems(searchTerm);
		promise.then(function (response){
			menu.found = response;	

			if (menu.found.length === 0){
				menu.message = "Nothing found";
			}
			else{
				menu.message = "";
			}
		},
		function(response){
			console.log("Error occurred.")
		});

	};

}


MenuSearchService.$inject=['$http'];
function MenuSearchService($http){

	var service = this;

	//List of filtered menu items
	var foundItems = [];

	service.getMatchedMenuItems = function(searchTerm){

		//Clear out every time button clicked
		foundItems = [];

		return $http({
			method: "GET",
			url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
		})
		.then(function (result) {
		    // process result and only keep items that match
	    	var myresult = result.data.menu_items;

	    	if (searchTerm !== ""){
				for(var i=0; i<myresult.length; i++){

					if (myresult[i].name.toLowerCase().indexOf(searchTerm) !== -1) {
						
						var item = {
							name: myresult[i].name,
							short_name: myresult[i].short_name,
							description: myresult[i].description
						};

						foundItems.push(item);	
					}
				}
			}
			

	   		// return processed items
			return foundItems;

		})
		.catch(function (errorResponse){
			console.log("Something went wrong inside getMatchedMenuItems function!");

		});

	}


	service.removeItem = function(itemIndex){
		foundItems.splice(itemIndex,1);
	}


	service.getItems = function(searchTerm){
		service.getMatchedMenuItems(searchTerm);
	}
}

})();