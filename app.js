(function () {
    'use strict';

    angular.module('MsgApp', [])
    .controller('MsgController', MsgController);

    MsgController.inject = ['$scope'];
    function MsgController($scope) {
        $scope.name = "Dayrel";
        $scope.stateOfBeing = "pollution";

        $scope.sayMessage = function () {
            return "Respect and Love our Mother Earth.."
        };

        $scope.clickme =function () {
            $scope.stateOfBeing = "die";
        }
    }

}) ();
