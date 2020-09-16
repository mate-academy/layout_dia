'use strict';

const burger = document.querySelector('.nav__burger');

const mobileNav = document.querySelector('.mobile');

burger.addEventListener('click', function() {
  mobileNav.classList.toggle('mobile--active');
  burger.classList.toggle('nav__burger--active');
});
