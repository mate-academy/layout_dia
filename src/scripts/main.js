'use strict';

const swiper = new Swiper('.swiper', {
  // Optional parameters
  //direction: 'vertical',
  //loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.icon--sliderArrow--next',
    prevEl: '.icon--sliderArrow--prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
