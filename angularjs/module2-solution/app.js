(function () {
'use strict';

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController',AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){

	var BuyItem = this;
	BuyItem.items = ShoppingListCheckOffService.getItemsToBuy();

	BuyItem.moveItem = function (itemIndex){
		ShoppingListCheckOffService.addItem(BuyItem.items[itemIndex]);
		ShoppingListCheckOffService.removeItem(itemIndex);

		BuyItem.errorMessage = "";
		if(BuyItem.items.length==0){
			BuyItem.errorMessage = "Everything is bought!";
		}

	};
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){

	var BoughtAdder = this;
	BoughtAdder.items = ShoppingListCheckOffService.getItemsBought();
}


function ShoppingListCheckOffService(){
	var service = this;

	//List of items to buy
	var itemsToBuy = [
	{name:"Cookies", quantity:10},
	{name:"Packs of Chips", quantity:3},
	{name:"Sugary Drinks", quantity:6},
	{name:"Bottles of Pepto Bismol", quantity:2},
	{name:"Bars of Hot Chocolate", quantity:4},
	];

	//List of items already bought
	var itemsBought = [];


	service.addItem = function(item){
		itemsBought.push(item);
	};

	service.removeItem = function(itemIndex){
		itemsToBuy.splice(itemIndex,1);
	};


	service.getItemsToBuy = function(){
		return itemsToBuy;
	};

	service.getItemsBought = function(){
		return itemsBought;
	};

}

})();