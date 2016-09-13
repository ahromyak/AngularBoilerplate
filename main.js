/**
 * Created by deepwest83 on 9/5/2016.
 */
var cjs = angular.module('myApp', ['ui.router']);

cjs.controller('mainController',['$scope', function ($scope) {
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function(){
            this.classList.toggle("active");
            this.nextElementSibling.classList.toggle("show");
        }
    }

    $scope.mainTest = 'Hello world';
}]);