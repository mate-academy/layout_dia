'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('air__body--with-menu');
  } else {
    document.body.classList.remove('air__body--with-menu');
  }
});
