(function () {
'use strict';

angular.module('MenuApp')
.component('itemList', {
  templateUrl: 'templates/itemlist.template.html',
  bindings: {
    items: '<'
  }
});

})();
