'use strict';

const swiper = new Swiper('.content__swiper', {
  loop: true,
  navigation: {
    nextEl: '.js-content-next',
    prevEl: '.js-content-prev',
  },
}
); 
