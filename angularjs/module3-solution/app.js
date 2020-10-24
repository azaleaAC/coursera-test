(function (){
'use strict';

angular.module('NarrowItDownApp',[])
.controller('NarrowItDownController',NarrowItDownController)
.service('MenuSearchService',MenuSearchService)
.directive('foundItems',foundItems);	


function foundItems(){
	var ddo = {
		scope: {
			list: '=foundItems',
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

	var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
	promise.then(function (response){
		menu.found = response.data;
	},
	function(response){
		console.log("Error running MenuSearchService.getMatchedMenuItems.")
	})

	menu.removeItem = function(itemIndex){
		MenuSearchService.removeItem(itemIndex);
	}

}


MenuSearchService.$inject=['$http'];
function MenuSearchService($http){

	var service = this;

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
		    	console.log("length", myresult.length, "myresult[1].name",myresult[1].name)
				for(var i=0; i<myresult.length; i++){

					if (myresult[i].name.toLowerCase().indexOf(searchTerm) !== -1){
						
						var item = {
							name: myresult[i].name
						};

						foundItems.push(item);	
						console.log(foundItem);			
					}
				}
			//}
		})
		.catch(function (errorResponse){
			console.log("Something went wrong!");

		});

	   // return processed items
	    return foundItems;
	};


	/*service.addItem = function(searchTerm, itemName){
		if (itemName.toLowerCase().indexOf(searchTerm) === -1){
			var item = {
				name: itemName
			};

			foundItems.push(item)
		}*/
	//}

	service.removeItem = function(){
		items.splice(itemIndex,1);
	}
 
}

})()