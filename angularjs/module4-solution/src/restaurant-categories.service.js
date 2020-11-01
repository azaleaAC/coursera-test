(function (){
'use strict';

angular.module('RestaurantMenu')
.service('CategoriesService',CategoriesService);


CategoriesService.$inject=['$http'];
function CategoriesService($http){

	var service = this;


	service.getCategories = function(){

		//Clear out every time function called
		var categoriesList = [];

		return $http({
			method: "GET",
			url: ("https://davids-restaurant.herokuapp.com/categories.json")
		})
		.then(function (result) {
		    // process result and only keep items that match
	    	var myresult = result.data;

	    	//temp
	    	//console.log('myresult is ', myresult);

	    	//if (searchTerm !== ""){
				for(var i=0; i<myresult.length; i++){

					//if (myresult[i].name.toLowerCase().indexOf(searchTerm) !== -1) {
						
						var category = {
							short_name: myresult[i].short_name,
							name: myresult[i].name,
//							description: myresult[i].description
						};

						categoriesList.push(category);	

						//temp
						console.log(category.name);
					//}
				}
			//}
			

	   		// return processed items
			return categoriesList;

		})
		.catch(function (errorResponse){
			console.log("Something went wrong!");

		});

	}

}


})();