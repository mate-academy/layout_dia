'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#nav-mobile') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

function stopDefAction(evt) {
  evt.preventDefault();
}

document.getElementById('my-form').addEventListener(
  'click', stopDefAction, false
);
