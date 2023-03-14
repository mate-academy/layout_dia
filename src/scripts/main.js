'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('menu--with-menu');
  } else {
    document.body.classList.remove('menu--with-menu');
  }
});

const form = document.querySelector('.contact-us__form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});
