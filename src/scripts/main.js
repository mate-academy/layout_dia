'use strict';

document.addEventListener('hashchange', () => {
  if (window.location.hash === '#home') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
