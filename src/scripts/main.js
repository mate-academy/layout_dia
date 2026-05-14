'use strict';

const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 0,

  navigation: {
    nextEl: '.icon--sliderArrow--next',
    prevEl: '.icon--sliderArrow--prev',
  },

  observer: true,
  observeParents: true,
});
