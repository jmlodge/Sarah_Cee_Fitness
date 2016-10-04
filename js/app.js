var app = angular.module('sarahCeeApp', ['ngRoute'])
.config(function($routeProvider) {

    $routeProvider.when("/", {
        templateUrl: "templates/home.html"
    })

    $routeProvider.when("/about", {
    	templateUrl: "templates/about.html"
    })
});