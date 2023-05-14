'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--menu-opener');
  } else {
    document.body.classList.remove('page__body--menu-opener');
  }
});

document.getElementById('form').addEventListener('submit', (event) => {
  event.preventDefault();
  document.getElementById('form').reset();
});
