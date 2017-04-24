(function () {
    'use strict';

    function ActiveCtrl($scope, $firebaseArray) {

        var rootRef = new Firebase("https://blocitoff-84bff.firebaseio.com");

        $scope.tasks = $firebaseArray(rootRef);
        $scope.addTask = function () {
            $scope.tasks.$add({
                text: $scope.newTaskText,
                priority: $scope.newTaskPriority
            });
        };

    }

    angular
        .module('BlocItOff')
        .controller('ActiveCtrl', ['$scope', '$firebaseArray', '$firebaseObject', ActiveCtrl]);

})();
