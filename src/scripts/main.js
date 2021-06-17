'use strict';

const list = document.querySelector('.navigation__sidebar');
const icon = document.querySelector('.navigation__label');

icon.addEventListener('click', () => {
  icon.classList.toggle('navigation__label--active');
  list.classList.toggle('navigation__sidebar--active');
});
