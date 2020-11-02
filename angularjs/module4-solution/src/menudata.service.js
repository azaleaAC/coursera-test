(function (){
'use strict';

angular.module('data')
.service('MenuDataService',MenuDataService);


MenuDataService.$inject=['$http'];
function MenuDataService($http){

	var service = this;


service.getAllCategories = function(){

		//Clear out every time function called
		var categoriesList = [];

		return $http({
			method: "GET",
			url: ("https://davids-restaurant.herokuapp.com/categories.json")
		})
		.then(function (result) {
		    // process result and only keep items that match
	    	var myresult = result.data;

			for(var i=0; i<myresult.length; i++){

				var category = {
					short_name: myresult[i].short_name,
					name: myresult[i].name,
				};

				categoriesList.push(category);	
			}
		
	   		// return processed items
			return categoriesList;

		})
		.catch(function (errorResponse){
			console.log("Something went wrong!");

		});

	}


//getItemsForCategory(categoryShortName)
	service.getMatchedMenuItems = function(searchTerm){

		//Clear out every time function called
		var found = [];

		return $http({
			method: "GET",
			url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
		})
		.then(function (result) {
		    // process result and only keep items that match
	    	var myresult = result.data.menu_items;

	    	if (searchTerm !== ""){
				for(var i=0; i<myresult.length; i++){

					if (myresult[i].short_name.indexOf(searchTerm) !== -1) {
						
						var item = {
							name: myresult[i].name,
							short_name: myresult[i].short_name,
							description: myresult[i].description
						};

						found.push(item);	
						console.log("item added: ", item.name)
					}
				}
			}
			

	   		// return processed items
			return found;

		})
		.catch(function (errorResponse){
			console.log("Something went wrong with getting menu items!");

		});

	}


	service.getItems = function(searchTerm){
		service.getMatchedMenuItems(searchTerm);
	}
}


})();