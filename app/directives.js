(function () {
    "use strict";

    angular.module('BlendleApp')
        .directive('header', function () {
            return {
                restrict: 'A', // I hate custom HTML elements
                replace: true,
                templateUrl: 'app/views/header.html',
                controller: 'SlideshowCtrl'
            };
        })
        .directive('footer', function () {
            return {
                restrict: 'A',
                replace: true,
                templateUrl: 'app/views/footer.html',
                controller: 'SlideshowCtrl'
            };
        });
}());
