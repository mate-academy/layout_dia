'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const form = document.getElementById('form');

function onSubmit(e) {
  e.preventDefault();
  form.reset();
  window.scrollTo(0, 0);
}

form.addEventListener('submit', onSubmit);
