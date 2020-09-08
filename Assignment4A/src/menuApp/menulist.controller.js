(function () {
'use strict';

angular.module('MenuApp')
.controller('MenuListController', MenuListController);

MenuListController.$inject = ['catItems'];
function MenuListController(catItems) {
  var mainList = this;
  mainList.items = catItems.data;
}

})();
