'use strict';

const swiper = new Swiper('.slider-main-block', {
  // Optional parameters
  loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.navigation-main-block__arrow.swiper-button-next',
    prevEl: '.navigation-main-block__arrow.swiper-button-prev',
  },
});
