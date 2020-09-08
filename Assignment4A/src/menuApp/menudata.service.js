(function () {
'use strict';

angular.module('Data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$q', '$http', 'ApiBasePath']
function MenuDataService($q, $http, ApiBasePath) {
  var service = this;

  // List of shopping items

  var items = [];

  service.getAllCategories = function () {
    var deferred = $q.defer();

    var items =$http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    });
    
    deferred.resolve(items);
    return deferred.promise;
  };

  service.getItemsForCategory = function (itemId) {
    var deferred = $q.defer();
    var items =$http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json?category="+ itemId)
    });

    deferred.resolve(items);
    return deferred.promise;
  };
  
}

})();
