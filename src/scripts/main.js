'use strict';

const sandwich = document.querySelector('.sandwich');
const mobileMenu = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const body = document.body;

sandwich.addEventListener('click', mobileMenuToggle);

function mobileMenuToggle() {
  sandwich.classList.toggle('sandwich--clicked');
  mobileMenu.classList.toggle('nav--opened');
  body.classList.toggle('has-modal');

  if (sandwich.classList.contains('sandwich--clicked')) {
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', mobileMenuRemove);
    }
  }
}

function mobileMenuRemove() {
  sandwich.classList.remove('sandwich--clicked');
  mobileMenu.classList.remove('nav--opened');
  body.classList.remove('has-modal');
}
