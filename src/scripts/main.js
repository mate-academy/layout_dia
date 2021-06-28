'use strict';

const list = document.querySelector('.navigation__sidebar');
const icon = document.querySelector('.navigation__label');

icon.addEventListener('click', () => {
  icon.classList.toggle('navigation__label--active');
  list.classList.toggle('navigation__sidebar--active');
});

list.addEventListener('click', () => {
  icon.classList.remove('navigation__label--active');
  list.classList.remove('navigation__sidebar--active');
});

const form = document.querySelector('.contact-us__form');
const inputs = document.querySelectorAll('.contact-us__input');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  for (const input of inputs) {
    input.value = '';
  }
});
