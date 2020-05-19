'use strict';

$(document).ready(function(){
  $('.slider').slick({
    speed: 1000,
    autoplay: 2000,
    fade: true
  });
});

$(document).ready(function() {
  $('a[href^="#"]').click(function() {
    let target = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, 1500);
  });
});

$(".header__burger, .mobile__close-icon").click(function() {
  $('.mobile').slideToggle(500);
});
