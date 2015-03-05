/**
 * BlendleApp Module
 */
(function () {
    "use strict";

    angular.module('BlendleApp', ['ngRoute'])
        .config(['$routeProvider', routeProvider])
        .config(['$locationProvider', locationProvider]);

    function locationProvider ($locationProvider) {
        $locationProvider.hashPrefix("!");
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