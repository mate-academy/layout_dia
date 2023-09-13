'use strict';
import Swiper from 'swiper/swiper-bundle.min.mjs';

const swiper = new Swiper('.swiper', {
  loop: true,
  grabCursor: true,
  speed: 1500,
  effect: 'fade',
  crossFade: true,

  navigation: {
    nextEl: '.swiper__button--next',
    prevEl: '.swiper__button--prev',
  },

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },

  on: {
    transitionStart: function() {
      swiper.params.speed = 1500;
    },
    transitionEnd: function() {
      swiper.params.speed = 300;
    },
    click: function() {
      swiper.params.speed = 300;
    },
  },
});
