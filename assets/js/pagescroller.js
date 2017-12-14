/*jslint browser: true*/
/*global $, jQuery, alert*/


$(document).ready(function () {
  
  $("#homeButton").on("click", function() {
    $('html, body').animate({
        scrollTop: $("#intro").offset().top
    }, 1000);
  });
	
	$("#nameButton").on("click", function() {
    $('html, body').animate({
        scrollTop: $("#intro").offset().top
    }, 1000);
  });
 
  
  $("#aboutButton").on("click", function() {
    $('html, body').animate({
        scrollTop: $("#about-me").offset().top - 100
    }, 1000);
  });
	
	$("#startButton").click(function() {
    $('html, body').animate({
        scrollTop: $("#about-me").offset().top - 100
    }, 1000);
  });
  
  $("#projectButton").on("click", function() {
    $('html, body').animate({
        scrollTop: $("#projects").offset().top - 100
    }, 1000);
  });
  
  $("#contactButton").on("click", function() {
    $('html, body').animate({
        scrollTop: $("#contact").offset().top - 100
    }, 1000);
  });
	
	$("#researchButton").on("click", function() {
    $('html, body').animate({
        scrollTop: $("#userResearch").offset().top - 100
    }, 1000);
  });
	
	$("#testingButton").on("click", function() {
    $('html, body').animate({
        scrollTop: $("#userTesting").offset().top - 100
    }, 1000);
  });
	
	$("#summaryButton").on("click", function() {
    $('html, body').animate({
        scrollTop: $("#summary").offset().top - 100
    }, 1000);
  });
	
	$("#incorporationButton").on("click", function() {
    $('html, body').animate({
        scrollTop: $("#incorporation").offset().top - 100
    }, 1000);
  });
});