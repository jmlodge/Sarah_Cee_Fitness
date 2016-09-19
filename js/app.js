var app = angular.module('sarahCeeApp', ['ngRoute'])
.config(function($routeProvider) {

    $routeProvider.when("/", {
            templateUrl: "templates/home.html"
        })
});