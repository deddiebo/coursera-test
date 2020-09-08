(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menuApp/templates/home.template.html'
  })

  // Categories list
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menuApp/templates/categorymenulist.template.html',
    controller: 'MenuListController as categoryList',
    resolve: {
      catItems: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/items/{itemId}',
    templateUrl: 'src/menuApp/templates/itemmenulist.template.html',
    controller: 'ItemListController as itemList',
    resolve: {
      items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory([$stateParams.itemId]);
      }]
    }
  });

}

})();
