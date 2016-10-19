$(document).ready(function(){

	$(window).scroll(function () {
	   
	    if ($(window).scrollTop() < 80) {
	      $('#nav_bar').addClass('navMargin');
	    }
	    if ($(window).scrollTop() > 80) {
	      $('#nav_bar').removeClass('navMargin');
	    }
  	});

  	var $animationEle = $('.hovereffect');
  	var $window = $(window);

  	function checkInView() {
  		var winHeight = $window.height();
  		var winWidth = $window.width();
  		var winTop = $window.scrollTop();
  		var winBottom = (winTop + winHeight);

  		console.log(winWidth);

  		$.each($animationEle, function() {
  			var $ele = $(this);
  			var eleHeight = $ele.outerHeight();
  			var eleTop = $ele.offset().top;
  			var eleBottom = (eleTop + eleHeight);



  			if (winWidth < 990) {
	  			if ((eleBottom >= winTop) && (eleTop <= winBottom)) {
	  				console.log(eleBottom);
	  				console.log(winTop);
	  				$('img').css({
	  					filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feComponentTransfer color-interpolation-filters="sRGB"><feFuncR type="linear" slope="1.4" /><feFuncG type="linear" slope="1.4" /><feFuncB type="linear" slope="1.4" /></feComponentTransfer></filter></svg>#filter'),
						filter: brightness(1.4)
	  				})
	  				$('.overlay').css('background-color', 'rgba(0,0,0,0.6)');
	  				$('.serviceLink .servivePara .overlay').css({
	  					opacity: 1,
						filter: alpha(opacity=100),
						transform: translate3d(0,0,0)
	  				})
	  			} 
  			}
  		});
  	}

  	$window.on('scroll resize', checkInView);
	$window.trigger('scroll');

    
});