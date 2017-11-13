/*jslint browser: true*/
/*global $, jQuery, alert*/

"use strict";
$(document).ready(function () {
  

  $('slide-section').click(function(e) {
    
    alert('Clicked');
    e.preventDefault();
    
  });
  
});