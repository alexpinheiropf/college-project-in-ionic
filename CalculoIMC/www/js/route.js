angular.module('calculadoraAngular')
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('menu', {
        url: '/',
        templateUrl: 'templates/calcular.html',
        controller: 'imcController'
      })
      .state('resultado', {
        url: '/resultado',
        templateUrl: 'templates/resultado.html'
      })
    $urlRouterProvider.otherwise('/')
  });
