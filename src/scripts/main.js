'use strict';

const images = [
  "../images/slider/slide-img-1.jpg",
  "../images/slider/slide-img-2.jpg",
  "../images/slider/slide-img-3.jpg",
];
let nextimage = 1;

$('.gallery__button-r').click(function() {
  nextimage++;
  if (nextimage >= images.length) {
    nextimage = 0;
  } else if (nextimage < 0) {
    nextimage = images.length - 1;
  }
  $('.gallery__slider')
    .css('background-image', 'url(' + images[nextimage] + ')');
});

$('.gallery__button-l').click(function() {
  nextimage--;
  if (nextimage >= images.length) {
    nextimage = 0;
  } else if (nextimage < 0) {
    nextimage = images.length - 1;
  }
  $('.gallery__slider')
    .css('background-image', 'url(' + images[nextimage] + ')');
});

var $hamburger = $(".hamburger");
  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    $(".mobile-menu").toggleClass("on");
  });
