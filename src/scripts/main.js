'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with_menu');
  } else {
    document.body.classList.remove('page__body--with_menu');
  }
});

const butt = document.getElementById('myform');

butt.addEventListener('submit', butSubmit, false);

function butSubmit(event) {
  event.preventDefault();
  document.getElementById('myform').reset();
}
