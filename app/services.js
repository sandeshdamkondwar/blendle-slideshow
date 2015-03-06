(function () {
    "use strict";

    angular.module('BlendleApp')
        .factory('Constants', function() {

        })
        .factory("User", function () {
            // instantiate our initial object
                var User = function (options) {
                    this.username = options.username;
                    this.firstName = options.firstName;
                    this.lastName = options.lastName;
                    this.avatarURL = options.avatarURL;
                };

                return User;
        })
        .factory('Slides', function() {

        })
        .factory("Slider", function () {

        });
}());