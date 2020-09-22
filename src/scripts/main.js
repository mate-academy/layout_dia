'use strict';

const nav = document.querySelector('.header__nav');
const burger = document.querySelector('.burger');
const navItem = document.querySelectorAll('.nav__item');

burger.addEventListener('click', toggleMenu);

function toggleMenu() {
  nav.classList.toggle('active');
  burger.classList.toggle('active');
}

navItem.forEach(element => {
  element.addEventListener('click', toggleMenu);
});
