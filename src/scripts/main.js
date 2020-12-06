'use strict';

const navBtn = document.querySelector('.header__btn');
const nav = document.querySelector('.nav__list');

navBtn.addEventListener('click', function() {
  navBtn.classList.toggle('header__btn--close');
  nav.classList.toggle('nav__list--active');
});
