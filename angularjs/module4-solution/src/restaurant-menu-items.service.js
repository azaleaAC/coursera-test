(function (){
'use strict';

angular.module('RestaurantMenu')
.service('MenuSearchService',MenuSearchService);


MenuSearchService.$inject=['$http'];
function MenuSearchService($http){

	var service = this;

	//List of filtered menu items
	var found = [];

	service.getMatchedMenuItems = function(searchTerm){

		//Clear out every time button clicked
		found = [];

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

						found.push(item);	
					}
				}
			}
			

	   		// return processed items
			return found;

		})
		.catch(function (errorResponse){
			console.log("Something went wrong inside getMatchedMenuItems function!");

		});

	}


	service.removeItem = function(itemIndex){
		found.splice(itemIndex,1);
	}


	service.getItems = function(searchTerm){
		service.getMatchedMenuItems(searchTerm);
	}
}


})();