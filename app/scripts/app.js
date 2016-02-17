'use strict';

/**
 * @ngdoc overview
 * @name mytodoApp
 * @description
 * # mytodoApp
 *
 * Main module of the application.
 */
angular
    .module('mytodoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            })
            .when('/info', {
                templateUrl: 'views/info.html',
                controller: 'InfoCtrl',
                controllerAs: 'info'
            })
                    .when('/wedding', {
                templateUrl: 'views/wedding.html',
                controller: 'WeddingCtrl',
                controllerAs: 'wedding'
            })
                            .when('/gifts', {
                templateUrl: 'views/gifts.html',
                controller: 'GiftsCtrl',
                controllerAs: 'gifts'
            })
            .when('/RSVP', {
                templateUrl: 'views/RSVP.html',
                controller: 'RSVPCtrl',
                controllerAs: 'RSVP'
            })
          .when('/Contact', {
            templateUrl: 'views/Contact.html',
            controller: 'ContactCtrl',
            controllerAs: 'Contact'
          })

        .otherwise({
            redirectTo: '/'
        });
    });

$('.nav a').on('click', function(){
  $('.btn-navbar').click();
  $('.navbar-toggle').click();
});
