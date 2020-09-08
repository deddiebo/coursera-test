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
    templateUrl: 'templates/home.template.html'
  })

  // Categories list
  .state('categories', {
    url: '/categories',
    templateUrl: 'templates/categorymenulist.template.html',
    controller: 'MenuListController as categoryList',
    resolve: {
      catItems: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories();
      }]
    }
  })

  .state('items', {
    url: '/items/{itemId}',
    templateUrl: 'templates/itemmenulist.template.html',
    controller: 'ItemListController as itemList',
    resolve: {
      items: ['$stateParams','MenuDataService', function ($stateParams, MenuDataService) {
        return MenuDataService.getItemsForCategory([$stateParams.itemId]);
      }]
    }
  });

}

})();
