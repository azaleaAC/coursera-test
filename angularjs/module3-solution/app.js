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
			list: '<foundItems',
			onRemove: '&'
		},
		controller: NarrowItDownController,
		controllerAs: 'list',
		bindToController: true,
		link: NarrowDirectiveLink
	};

	return ddo;
}


function NarrowDirectiveLink(scope, element, attrs, controller){
	scope.$watch('list.itemsInList()', function(validList){
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
}


NarrowItDownController.$inject=['MenuSearchService'];
function NarrowItDownController(MenuSearchService){
	
	var menu = this;

	menu.searchTerm = "";

	menu.message = "Nothing found";

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
	};

	menu.itemsInList = function(searchTerm){
		MenuSearchService.itemsInList(searchTerm);
	}

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
	    	console.log("length", myresult.length, "myresult[1].name",myresult[1].name)
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
		console.log("first item in found items is ",foundItems[0].name, "and # of items is ", foundItems.length)
	   // return processed items
			return foundItems;
		})
		.catch(function (errorResponse){
			console.log("Something went wrong inside getMatchedMenuItems function!");

		});

		//console.log("first item in found items is ",foundItems[0].name, "and has ", foundItems.length)
	   // return processed items
	    //return foundItems;
	}


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
	}

	service.getItems = function(searchTerm){
		service.getMatchedMenuItems(searchTerm);
	}

 	service.itemsInList = function(){
 		return ((foundItems.length > 0) && (searchTerm !== ""));
 	}
}

})();