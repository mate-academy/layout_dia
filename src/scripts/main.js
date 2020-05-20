'use strict';

const menu = document.querySelectorAll('.nav');
const button = document.querySelectorAll('.nav__menu-toggle');

for (let i = 0; i < button.length; i++) {
  button[i].addEventListener('click', () => {
    menu[i].classList.toggle('nav--menu-open');
    menu[i].classList.toggle('nav--menu-close');
  });
}
