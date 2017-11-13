/*jslint browser: true*/
/*global $, jQuery, alert*/


$(document).ready(function () {
  
  $("#aboutButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
  });
  
  $("#skillsButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#skills").offset().top
    }, 1000);
  });
  
  $("#experienceButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#experience").offset().top
    }, 1000);
  });
  
  $("#contactButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
  });
  
  
  
});