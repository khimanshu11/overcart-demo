'use strict';
(function() {
    var app = angular.module('dashboard', ['ngDragDrop']);

    app.controller('TaskCtrl', ['$scope', function($scope) {
        $scope.todoTasks = [];
        $scope.addTask = function() {
            $scope.todoTasks.push($scope.task);
            $scope.task = {};
        }
        $scope.dropItem = function(event){
            angular.element(event.target);
        }
    }])

    app.directive('starttask', [function() {
        return {
            restrict: 'E',
            templateUrl: 'start-task.html'
        }
    }])
})();