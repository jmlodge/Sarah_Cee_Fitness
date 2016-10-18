angular.module('scfControllers', [])

.controller('BlogController', function($scope, BlogService) {
	var promise = BlogService.getBlog();
	promise.then(function (blog) {
		var blogReverse = blog.data.reverse();
		$scope.blogContent = blogReverse;
		console.log($scope.blogContent);
	});
})

.controller('ContactController', function ($scope, $http) {
	$scope.result = 'hidden'
	$scope.resultMessage;
	$scope.formData;
	$scope.submitButtonDisabled = false;
	$scope.submitted = false; //only shows errors after submit
	$scope.submit = function(contactform) {
		$scope.submitted = true;
		$scope.submitButtonDisabled = true;
		if (contactform.$valid) {
			$http({
				method: 'post',
				url: 'contact-form.php',
				data: $.param($scope.formData),
				headers: {'Content-Type': 'application/x-www-form-urlencoded'}
			}).success(function(data) {
				if (data.success) {
					$scope.submitButtonDisabled= true;
					$scope.resultMessage = data.message;
					$scope.result='bg-success';
				} else {
					$scope.submitButtonDisabled = false;
                    $scope.resultMessage = data.message;
                    $scope.result='bg-danger';
				}
			});
		} else {
			$scope.submitButtonDisabled = false;
			$scope.resultMessage = 'Failed <img src="http://www.chaosm.net/blog/wp-includes/images/smilies/icon_sad.gif" alt=":(" class="wp-smiley">  Please fill out all the fields.';
			$scope.result='bg-danger';
		}
	}
})

//angular.module('schoolControllers', [])

//.controller('NewsListController', function($scope, NewsListService) {
//	var promise = NewsListService.getNews();
//	promise.then(function (news) {
//		var newsReverse = news.data.reverse();
//		$scope.newsList = newsReverse;
//	});
//})