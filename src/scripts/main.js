'use strict';

const mobileBurger = document.querySelector('.nav__mobile-burger');
const headerInfo = document.querySelector('.header__info');

mobileBurger.addEventListener('click', function() {
  mobileBurger.classList.toggle('nav__mobile-burger--active');
  headerInfo.classList.toggle('header__info--dis');
});
