'use strict';

const images = [
  "../images/slider/slide-img-1.jpg",
  "../images/slider/slide-img-2.jpg",
  "../images/slider/slide-img-3.jpg",
];
let nextimage = 0;

$('.gallery__button-r').click(function() {
  if (nextimage >= images.length) {
    nextimage = 0;
  } else if (nextimage < 0) {
    nextimage = images.length - 1;
  }
  $('.gallery__slider')
    .css('background-image', 'url(' + images[nextimage++] + ')');
});

$('.gallery__button-l').click(function() {
  if (nextimage >= images.length) {
    nextimage = 0;
  } else if (nextimage < 0) {
    nextimage = images.length - 1;
  }
  $('.gallery__slider')
    .css('background-image', 'url(' + images[nextimage--] + ')');
});

let hamburger = $(".hamburger");
hamburger.on("click", function(e) {
  hamburger.toggleClass("is-active");
})
