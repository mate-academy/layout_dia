'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page--with-menu');
  } else {
    document.body.classList.remove('page--with-menu');
  }
});

const form = document.getElementById('form');

function handleForm(event) {
  event.preventDefault();
  form.reset();
}
form.addEventListener('submit', handleForm);

[document.querySelectorAll('a.arrow__link')].forEach((node) => {
  node.addEventListener('click', (event) => {
    event.preventDefault();
  });
});
