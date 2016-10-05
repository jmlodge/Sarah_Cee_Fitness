$(document).ready(function(){

 	

   	var docHeight = $(window).height();
   	var footerHeight = $('#footerBottom').height();
   	var footerTop = $('#footerBottom').position().top + footerHeight;

   	if (footerTop < docHeight) {
    $('#footerBottom').css('margin-top', (docHeight - footerTop * 10) + 'px');
   	}
 
 	$('a[href*=services]').on('click', function(event){     
	    event.preventDefault();
	    $('html,body').animate({scrollTop:$(this, "#scrollTo").offset().top}, 500);
	});
   
    //$(".serviceSlide").hover(function(){
        //$(this).find("div.serviceText").slideDown("slow");
    //},function(){
       // $(this).find("div.serviceText").slideUp("slow");    
    //});
 
    
});