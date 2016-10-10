angular.module('scfDirectives', [])
.directive('scfNav', function() {
	return {
		restrict: 'AE',
		templateUrl: 'templates/directives/scf-nav.html'
	};
})

.directive('scfFooter', function() {
	return {
		restrict: 'AE',
		templateUrl: 'templates/directives/scf-footer.html'
	};
})