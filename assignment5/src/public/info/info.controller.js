(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['UserService', 'myData'];
function InfoController(UserService, myData) {
  var ctrl = this;
  ctrl.myData = myData;

  if (ctrl.myData.favorite) {
    var promise = UserService.getSelection(ctrl.myData.favorite);
    promise.then(function (response) {
      ctrl.result = response;
    })
     .catch(function (error) {
      console.log("Something went terribly wrong.");
    });
  }

}

})();