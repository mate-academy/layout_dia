'use strict';

const disableFocusFor = document.querySelectorAll('[data-focus="disabled"]');
const enableFocusFor = document.querySelectorAll('[data-focus="enabled"]');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');

    disableFocusFor.forEach(disableFocus);
    enableFocusFor.forEach(enableFocus);
  } else {
    document.body.classList.remove('page__body--with-menu');

    disableFocusFor.forEach(enableFocus);
    enableFocusFor.forEach(disableFocus);
  }
});

function disableFocus(el) {
  el.setAttribute('tabindex', '-1');
}

function enableFocus(el) {
  el.removeAttribute('tabindex');
}
