(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective)
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html',
    scope: {
      menuz: '<'
    }
  };
  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController(MenuSearchService) {
  var menu = this;
  menu.found = true;

  menu.removeItem = function (itemIndex) {
    menu.items.splice(itemIndex, 1);
    if (menu.items.length === 0 ) menu.found = false;
  };

  menu.startSearch = function () {
    var promise = MenuSearchService.getMatchedMenuItems(menu.searchTerm);
    promise.then(function (response) {
      menu.items = response;
      if (menu.items.length > 0 ) {
          menu.found = true;
        } else {
          menu.found = false;
        }
    })
    .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  }
};


MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {

    if ( searchTerm === undefined || searchTerm === "") searchTerm = "zzzzzzz";
    searchTerm = searchTerm.trim().toLowerCase();

    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    })
    .then(function (response) {    
      
      var foundItems = [];

      for ( var i = 0 ; i < response.data.menu_items.length ; i++ ) {
        if ( response.data.menu_items[i].name.toLowerCase().indexOf(searchTerm) !== -1 ) 
          foundItems.push( response.data.menu_items[i] );
      }
    return foundItems;

    }).catch(function (error) {
      console.log("Error while retrieving the data.");
    });
    
  };
}

})();



