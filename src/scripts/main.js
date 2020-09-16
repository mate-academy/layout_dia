'use strict';

// navigation menu
const burger = document.querySelector('.nav__btn');
const mobileMenu = document.querySelector('.nav');
const navLinks = document.querySelectorAll('.nav__link');
const body = document.body;

burger.addEventListener('click', mobileMenuToggle);

function mobileMenuToggle() {
  burger.classList.toggle('nav__btn--clicked');
  mobileMenu.classList.toggle('nav--visisble');
  body.classList.toggle('has-modal');

  if (burger.classList.contains('nav__btn--clicked')) {
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener('click', mobileMenuRemove);
    }
  }
}

function mobileMenuRemove() {
  burger.classList.remove('nav__btn--clicked');
  mobileMenu.classList.remove('nav--visisble');
  body.classList.remove('has-modal');
}

//input pattern

const input = document.getElementById('form-message');

input.oninput = () => {
  if (input.value.charAt(0) === ' ') {
    input.value = '';
  }
};
