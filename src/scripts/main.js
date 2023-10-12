'use strict';

// Slider
import $ from 'jquery';
import 'slick-carousel';

$('.header-slider').slick({
  arrows: true,
  dots: false,
  // slidesToShow: 1, // к-сть для показу
  speed: 500,
  easing: 'ease',
  initialSlide: 0,
  autoplay: false,
  autoplaySpeed: 3000,
});
