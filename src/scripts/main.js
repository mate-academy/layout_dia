'use strict';

const burger = document.querySelector('.burger');
const mobileMenu = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const body = document.body;

burger.addEventListener('click', mobileMenuToggle);

function mobileMenuToggle() {
  burger.classList.toggle('burger--clicked');
  mobileMenu.classList.toggle('nav--visisble');
  body.classList.toggle('has-modal');

  if (burger.classList.contains('burger--clicked')) {
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', mobileMenuRemove);
    }
  }
}

function mobileMenuRemove() {
  burger.classList.remove('burger--clicked');
  mobileMenu.classList.remove('nav--visisble');
  body.classList.remove('has-modal');
}
