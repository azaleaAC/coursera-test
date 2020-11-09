(function () {
"use strict";

angular.module('public')
.component('infoMenuItem', {
  templateUrl: 'src/public/info/info.html',
  bindings: {
    menuItem: '<'
  },
  controller: MenuItemController
});


MenuItemController.$inject = ['ApiPath'];
function MenuItemController(ApiPath) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
}

})();
