
$(function(){
  'use strict';
 $(window).load(function(){
        $("body").css("overflow","auto");
$(".loading-overlay .sk-folding-cube").fadeOut(2000,function(){
    $(this).parent().fadeOut(2000,function(){
        $(this).remove();
    })
});
    });
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

$(window).load(function(){
  $("body").css("overflow","auto");
$(".loading-overlay .spinner").fadeOut(1000,function(){
$(this).parent().fadeOut(1000,function(){
  $(this).remove();
})
});
});
});//End Main Function
