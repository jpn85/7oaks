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
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'home'
            })

          .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'home'
          })

          .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'aboutCtrl',
            controllerAs: 'about'
          })

            .when('/projects', {
                templateUrl: 'views/projects.html',
                controller: 'ProjectsCtrl',
                controllerAs: 'projects'
            })
                            .when('/contact', {
                templateUrl: 'views/contact.html',
                controller: 'ContactCtrl',
                controllerAs: 'contact'
            })
          .when('/references', {
            templateUrl: 'views/references.html',
            controller: 'ReferencesCtrl',
            controllerAs: 'references'
          })


        .otherwise({
            redirectTo: '/'
        });
    });

$('.nav a').on('click', function(){
  $('.btn-navbar').click();
  $('.navbar-toggle').click();
});

//testing testing

/* Global Variables */
var $header = $('.art-header');
var $artInner = $('.art-inner');
var $body = $('body');
var $wrap = $('.wrap');
var scrollTop;

$body.css({
  //'background-color': 'rgba(86,84,84,'+ (.1 - scrollTop / 6000) + ')'
});

$(window).scroll(function(){
  var scrollTop = $(window).scrollTop();

  $header.css({
    'background-position' : 'center ' + (-scrollTop/6)+"px"
  });

  $artInner.css({
    'opacity': 1 - scrollTop / 600 ,
    'margin-top' : scrollTop/ 2 + 'px'
  });

  $body.css({
    //'background-color': 'rgba(86,84,84,'+ (.1 - scrollTop / 6000) + ')'
  });

});
