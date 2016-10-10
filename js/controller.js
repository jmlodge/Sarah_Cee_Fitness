angular.module('scfControllers', [])

.controller('BlogController', function($scope, BlogService) {
	var promise = BlogService.getBlog();
	promise.then(function (blog) {
		var blogReverse = blog.data.reverse();
		$scope.blogContent = blogReverse;
		console.log($scope.blogContent);
	});
})

//angular.module('schoolControllers', [])

//.controller('NewsListController', function($scope, NewsListService) {
//	var promise = NewsListService.getNews();
//	promise.then(function (news) {
//		var newsReverse = news.data.reverse();
//		$scope.newsList = newsReverse;
//	});
//})