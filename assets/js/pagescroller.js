/*jslint browser: true*/
/*global $, jQuery, alert*/


$(document).ready(function () {
  
  $("#homeButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#headerSec").offset().top
    }, 1000);
  });
 
  
  $("#aboutButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 1000);
  });
  
  $("#educationButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#education").offset().top
    }, 1000);
  });
  
  $("#projectsButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top
    }, 1000);
  });
  
  $("#contactButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top
    }, 1000);
  });
  
  
  
});