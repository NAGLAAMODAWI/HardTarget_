
$(function(){
  'use strict';

  //Nav Bar Action
$('.navbar .nav li a').click(function(){
  $('html ,body').animate({ 
      scrollTop: $("#" +$(this).data('scroll')).offset().top - 50
  },1000)
});
  //Nav Bar Action
  $('.menu a').click(function(){
    $('html ,body').animate({ 
        scrollTop: $("#" +$(this).data('scroll')).offset().top - 50
    },1000)
  });

//Go To About And Sevices
$('.Header  button ').click(function(){
  $('html ,body').animate({ 
      scrollTop: $("#" +$(this).data('scroll')).offset().top - -150
  },1000)
});





});//End Main Function