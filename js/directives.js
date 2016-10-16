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

.directive('scrollToBookmark', function() {  
  return {
    link: function(scope, element, attrs) {
      var value = attrs.scrollToBookmark;
      element.click(function() {
        scope.$apply(function() {
          var selector = "[scroll-bookmark='"+ value +"']";
          var element = $(selector);
          if(element.length) {
            window.scrollTo(0, element[0].offsetTop); 
            // Don’t want the top to be the exact element, -100 will go to the top for a little bit more
          }
        });
      });
    }
  };
});
			
	

