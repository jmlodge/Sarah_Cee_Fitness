angular.module('scfControllers', [])

.controller('BlogController', function($scope, BlogService) {
	var promise = BlogService.getBlog();
	promise.then(function (blog) {
		var blogReverse = blog.data.reverse();
		$scope.blogContent = blogReverse;
	});
})