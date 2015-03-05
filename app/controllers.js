(function () {
    "use strict";

    angular.module('BlendleApp')
        .controller('SlideshowCtrl', ['$scope', '$http', '$q', SlideshowCtrl]);

    function SlideshowCtrl ($scope, $http, $q) {
        $scope.initialize = function () {
            // Avoiding FOUC
            $('.slideshow-app').css('display', 'block');


        };

        $scope.initialize();
    }
}());