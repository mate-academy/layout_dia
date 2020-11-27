'use strict';

$(document).ready(function() {
  $('.showcase__slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"></button>',
    nextArrow: '<button type="button" class="slick-next"></button>',
  });

  // Slider arrows should adapt to text height
  $('.showcase__slider .slick-arrow').css('bottom',
    $('.showcase__slider-info').height());

  // Showcase info cannot be placed in the container, but has to be in it
  $('.showcase__info').css('margin-left', ($(window).width() - 1145) / 2);

  $(window).on('resize', function() {
    if ($(window).width() > 1175) {
      $('.showcase__info').css('margin-left', ($(window).width() - 1145) / 2);
    }
  });
});
