'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page_body-with-menu');
  } else {
    document.body.classList.remove('page_body-with-menu');
  }
});
