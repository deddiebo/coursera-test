(function () {
'use strict';

angular.module('MenuApp')
.component('categoryList', {
  templateUrl: 'templates/categorylist.template.html',
  bindings: {
    items: '<'
  }
});

})();
