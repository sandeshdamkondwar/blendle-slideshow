/**
 * BlendleApp Module
 */
(function () {
    "use strict";

    angular.module('BlendleApp', ['ngRoute', 'LocalStorageModule'])
        .config(['$routeProvider', routeProvider])
        .config(['$locationProvider', locationProvider])
        .config(['localStorageServiceProvider', localStorageService]);

    function locationProvider ($locationProvider) {
        $locationProvider.hashPrefix("!");
    }

    function localStorageService (localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('blendle');
    }

    function routeProvider ($routeProvider) {
        $routeProvider.when('/slides/', {
            templateUrl: 'app/views/slideshowView.html',
            controller: 'SlideshowCtrl'
        })
        .otherwise({
            redirectTo: '/slides/'
        });
    }
}());