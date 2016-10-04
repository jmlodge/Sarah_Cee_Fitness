$(document).ready(function(){

 	$(document).ready(function() {

   	var docHeight = $(window).height();
   	var footerHeight = $('#footerBottom').height();
   	var footerTop = $('#footerBottom').position().top + footerHeight;

   	if (footerTop < docHeight) {
    $('#footerBottom').css('margin-top', (docHeight - footerTop * 12) + 'px');
   	}
  });
   
    //$(".serviceSlide").hover(function(){
        //$(this).find("div.serviceText").slideDown("slow");
    //},function(){
       // $(this).find("div.serviceText").slideUp("slow");    
    //});
 
    
});