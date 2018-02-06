(function () {
  'use strict';

  angular
    .module('angularMaterialKitchenSink')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home'
      })
      .state('about', {
        url: '/about',
        templateUrl: 'app/about/about.html',
        controller: 'AboutController',
        controllerAs: 'about'
      })
      .state('autocomplete', {
        url: '/autocomplete',
        templateUrl: 'app/autocomplete/autocomplete.html',
        controller: 'AutocompleteController',
        controllerAs: 'autocomplete'
      })
      .state('button', {
        url: '/button',
        templateUrl: 'app/button/button.html',
        controller: 'ButtonController',
        controllerAs: 'button'
      })
      .state('themePicker', {
        url: '/themePicker',
        templateUrl: 'app/themePicker/themePicker.html',
        controller: 'ThemePickerController',
        controllerAs: 'themePicker'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
