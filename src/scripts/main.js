'use strict';

const menu = document.querySelectorAll('.nav__item');
const form = document.querySelector('.contact__form');
const inputs = document.querySelectorAll('.value');

document.querySelector('.nav__menu').onclick = function() {
  menu.forEach(s => {
    s.classList.toggle('nav__item--hide');
  });

  menu.classList.toggle('nav__item--hide');
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  inputs.forEach(input => {
    input.value = '';
  });
});
