(function (){
'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.directive('foundItems',foundItems);	


function foundItems(){
	var ddo = {
		scope: {
			list: '<foundItems',
			onRemove: '&'
		},
		templateUrl: 'listItems.html'
	};

	return ddo;
}

NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
	
	var menu = this;

	menu.searchTerm = "";

	menu.message = "";

	var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
	promise.then(function (response){
		menu.found = response;
	},
	function(response){
		console.log("Error running MenuSearchService.getMatchedMenuItems.")
	});

	menu.removeItem = function(itemIndex){
		MenuSearchService.removeItem(itemIndex);
	};

	menu.getItems = function(searchTerm){
		MenuSearchService.getItems(searchTerm);
		//menu.message = MenuSearchService.getMessage(searchTerm);	
		if(menu.found.length === 0){
			menu.message = "Nothing found";
		}
		else{
			menu.message = "";
		}	
	};


	/*menu.getMessage = function(){
		if(menu.found.length === 0){
			menu.message = "Nothing found";
		}
		else{
			menu.message = "";
		}
	}*/

}


MenuSearchService.$inject=['$http'];
function MenuSearchService($http){

	var service = this;

 	//var searchTerm = "";

	//List of filtered menu items
	var foundItems = [];

	service.getMatchedMenuItems = function(searchTerm){
	
		return $http({
			method: "GET",
			url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
		})
		.then(function (result) {
		    // process result and only keep items that match
	    	var myresult = result.data.menu_items;
	    	//console.log("length", myresult.length, "myresult[1].name",myresult[1].name)
			for(var i=0; i<myresult.length; i++){

				if ((myresult[i].name.toLowerCase().indexOf(searchTerm) !== -1) && 
					(searchTerm !== "")){
					
					console.log('found one that matches ',searchTerm)
					var item = {
						name: myresult[i].name,
						short_name: myresult[i].short_name,
						description: myresult[i].description
					};

					foundItems.push(item);	
				}
			}
		//console.log("first item in found items is ",foundItems[0].name, "and # of items is ", foundItems.length)
	   // return processed items
			return foundItems;
		})
		.catch(function (errorResponse){
			console.log("Something went wrong inside getMatchedMenuItems function!");

		});

		//console.log("first item in found items is ",foundItems[0].name, "and has ", foundItems.length)
	   // return processed items
	    //return foundItems;
	};


	/*service.addItem = function(searchTerm, itemName){
		if (itemName.toLowerCase().indexOf(searchTerm) === -1){
			var item = {
				name: itemName
			};

			foundItems.push(item)
		}*/
	//}

	service.removeItem = function(itemIndex){
		foundItems.splice(itemIndex,1);
	};

	service.getItems = function(searchTerm){
		service.getMatchedMenuItems(searchTerm)
	};

	service.getMessage = function(searchTerm){
		
		var message = "";

		if((foundItems.length === 0) || (searchTerm === "")){
			message = "Nothing found";
		}
		else{
			message = "";
		}

		return message;
	}
 
}

})();