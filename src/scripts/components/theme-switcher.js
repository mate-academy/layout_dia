'use strict';

const page = document.querySelector('.js-page');
const switcher = document.querySelector('.js-theme-switcher');

switcher.addEventListener('click', () => {
  page.classList.toggle('page--hero');
});
