/*jslint browser: true*/
/*global $, jQuery, alert*/


$(document).ready(function(){
    
  $("#myTopNav > ul > li").click(function(){
        $("#myTopNav > ul > li").each(function(){
            $(this).removeClass("active");
        });
        $(this).addClass('active');
        
    });
  
});