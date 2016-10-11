$(document).ready(function(){

 	

   	var docHeight = $(window).height();
   	var footerHeight = $('#footerBottom').height();
   	var footerTop = $('#footerBottom').position().top + footerHeight;
    console.log(footerTop)

   	if (footerTop < docHeight) {
    $('#footerBottom').css('margin-top', (docHeight - footerTop * 10) + 'px');
   	}
    
});