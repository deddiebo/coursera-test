(function () {
"use strict";

angular.module('common')
.controller('SignupController', SignupController);

SignupController.$inject = ['UserService'];
function SignupController(UserService) {
  var reg = this;

  reg.submit = function () {
 	var promise = UserService.getSelection(reg.favorite);
 	promise.then(function (response) {
   	var result = response;
    reg.completed = true;
    reg.redo = false;
 	})
    .catch(function (error) {
    reg.completed = false;
    reg.redo = true;
  	});
 	// reg.choice = UserService.getSelection(reg.favorite);
    UserService.putUserData(reg);
  };
}



})();