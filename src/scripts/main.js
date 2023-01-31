'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu-opener') {
    document.body.classList.add('page__body--with-menu-opener');
  } else {
    document.body.classList.remove('page__body--with-menu-opener');
  }
});

const form = document.querySelector('.footer__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});
