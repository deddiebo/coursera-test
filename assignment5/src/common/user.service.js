(function () {
'use strict';

angular.module('common')
.service('UserService', UserService);

UserService.$inject = ['$q', '$http', 'ApiPath'];
function UserService($q, $http, ApiPath) {
  var service = this;
  var userData = {};

  service.putUserData = function (reg) {
  	userData = reg;
  };

  service.getUserData = function () {
  	return userData;
  };

  service.getSelection = function (choice) {
    var deferred = $q.defer();
    if (choice) {
      choice = choice.toUpperCase();
    }
    var item =$http({
      method: "GET",
      url: (ApiPath + '/menu_items/'+choice+'.json')
    });

    deferred.resolve(item);
    return deferred.promise;
  };
}

})();