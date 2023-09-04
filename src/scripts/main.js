'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#upmenu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// const pageReload = document.querySelector('#form-reload');

// pageReload.addEventListener('submit', function formReload(event) {
//   event.preventDefault();
//   pageReload.reset();
// });
