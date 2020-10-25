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
			foundItems: '<',
			onRemove: '&'
		},
		controller: NarrowItDownController,
		controllerAs: 'list',
		bindToController: true,
		//link: NarrowDirectiveLink
	};

	return ddo;
}


/*function NarrowDirectiveLink(scope, element, attrs, controller){
	scope.$watch('list.itemsInList()', function(validList){
		console.log("running NarrowDirectiveLink");
		if (validList === false){
			displayWarning();
		}
		else{
			hideWarning();
		}
		
	})


	function displayWarning(){
		var warningElem = element.find("div.error");
		warningElem.css('display','block');
	}


	function hideWarning(){
		var warningElem = element.find("div.error");
		warningElem.css('display','none');
	}
}*/


NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
	
	var menu = this;

	menu.searchTerm = "";
	menu.message = "";

	/*var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
	promise.then(function (response){
		menu.found = response;	
	},
	function(response){
		console.log("Error running MenuSearchService.getMatchedMenuItems.")
	});*/


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
			console.log("Error running MenuSearchService.getMatchedMenuItems.")
		});

	};

}


MenuSearchService.$inject=['$http'];
function MenuSearchService($http){

	var service = this;

	service.getMatchedMenuItems = function(searchTerm){
	
		//List of filtered menu items
		var foundItems = [];

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
						
						console.log('found one that matches ',searchTerm)
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