$(document).ready(function(){

	$(window).scroll(function () {
	   
	    if ($(window).scrollTop() < 80) {
	      $('#nav_bar').addClass('navMargin');
	    }
	    if ($(window).scrollTop() > 80) {
	      $('#nav_bar').removeClass('navMargin');
	    }
  	});

    
});