'use strict';

document.addEventListener('menu', () => {
  if (window.location.hash === '#burger') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
