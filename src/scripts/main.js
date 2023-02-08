'use strict';

window.onload = function() {
  document.getElementById('form').addEventListener(
    'submit', stopDefAction, false);
};

function stopDefAction(evt) {
  evt.preventDefault();
  document.form.reset();
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
