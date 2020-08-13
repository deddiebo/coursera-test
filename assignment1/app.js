(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.lunchList = "";
  $scope.lunchListState = "";
  
  $scope.pickAnswer = function() {
    var splitLunchList = $scope.lunchList.split(",");
    var lunchListLength = splitLunchList.length;
    $scope.lunchListState = splitLunchList;

  	if (splitLunchList == "") {
	  $scope.lunchListState = "Please enter data first";
  	}
  	else if (lunchListLength <= 3) {
	  $scope.lunchListState = "Enjoy!";
  	}else {
	  $scope.lunchListState = "Too much!";
  	};
  };
  
}

})();
