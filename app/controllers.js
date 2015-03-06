(function () {
    "use strict";

    angular.module('BlendleApp')
        .controller('SlideshowCtrl', ['$scope', '$http', '$q', 'User', 'localStorageService',  SlideshowCtrl]);

    function SlideshowCtrl ($scope, $http, $q, User, localStorageService) {
        $scope.initialize = function () {
            // Avoiding FOUC
            $('.slideshow-app').css('display', 'block');

            var user = localStorageService.get('user');

            // Creating dummy $scope.user user if not yet available in localstorage
            $scope.user = user || new User({
                username: "sandydamy",
                firstName: "Sandesh",
                lastName: "Damkondwar",
                avatarURL: "http://www.gravatar.com/avatar/d1887febcaf8696ac01dcde5de86fe04?s=200"
            });

            $scope.$watch('user', function () {
                localStorageService.set('user', $scope.user);
            }, true);
        };

        $scope.initialize();

        // This is just for debugging
        // TODO: Remove these lines while doing final touch
        window.app = $scope;
    }
}());