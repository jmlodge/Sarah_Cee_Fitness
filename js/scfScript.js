$(document).ready(function(){
   
    $(".serviceSlide").hover(function(){
        $(this).find("div.serviceText").slideDown("slow");
    },function(){
        $(this).find("div.serviceText").slideUp("slow");    
    });
 
    
});