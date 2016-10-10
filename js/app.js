var app = angular.module('sarahCeeApp', ['ngRoute', 'scfControllers'])
.config(function($routeProvider) {

    $routeProvider.when("/", {
        templateUrl: "templates/home.html"
    })

    $routeProvider.when("/about", {
    	templateUrl: "templates/about.html"
    })

    $routeProvider.when("/blog", {
    	templateUrl: "templates/blog.html"
    })

    $routeProvider.when("/contact", {
    	templateUrl: "templates/contact.html"
    })
});


