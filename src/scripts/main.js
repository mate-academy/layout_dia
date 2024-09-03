'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('html-menu');
  } else {
    document.body.classList.remove('html-menu');
  }
});
