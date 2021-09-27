
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


//Start Copy Whriter 
var TxtType = function(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 5) || 500;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};




});//End Main Function
