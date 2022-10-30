'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#mobile-menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.querySelector('.footer__form').addEventListener('submit', e => {
  e.preventDefault();
  document.querySelector('.footer__form').reset();
});
