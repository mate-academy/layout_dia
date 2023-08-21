'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu-burger') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

window.addEventListener('submit', (event) => {
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';

  event.preventDefault();
});
