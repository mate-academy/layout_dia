'use strict';

const menu = document.querySelector('.menu');
const iconMenu = document.querySelector('.icon-menu');
const swiper = document.querySelector('.header__right-sidebar');
const buttonLeft = document.querySelector('.swiper__button--left');
const buttonRight = document.querySelector('.swiper__button--right');
let swiperCards = 2;

iconMenu.addEventListener('click', function() {
  iconMenu.classList.toggle('icon-menu--close');
  menu.classList.toggle('page-menu');
  document.body.classList.toggle('page__body--with-menu');

  if (iconMenu.classList.contains('icon-menu--close')) {
    const links = document.querySelectorAll('.menu__link');

    for (const elem of links) {
      elem.addEventListener('click', function() {
        iconMenu.classList.remove('icon-menu--close');
        menu.classList.remove('page-menu');
        document.body.classList.remove('page__body--with-menu');
      });
    }
  }
});

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
