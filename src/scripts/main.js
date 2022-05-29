'use strict';

const swiper = document.querySelector('.header__right-sidebar');
const buttonLeft = document.querySelector('.swiper__button--left');
const buttonRight = document.querySelector('.swiper__button--right');
let swiperCards = 2;

document.getElementById('form-message').addEventListener(
  'click', function(event) {
    event.preventDefault();
  });

buttonRight.addEventListener('click', function() {
  swiper.classList.add(`header__right-sidebar--${swiperCards++}`);
});

buttonLeft.addEventListener('click', function() {
  if (swiperCards >= 2) {
    swiper.classList.remove(`header__right-sidebar--${swiperCards--}`);
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
