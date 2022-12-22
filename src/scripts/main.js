'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#slide2') {
    document.getElementById('slider').classList.add('slider--slide2');
  } else {
    document.getElementById('slider').classList.remove('slider--slide2');
  }
});
