'use strict';

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
});

const prev = document.getElementById('prev');
const next = document.getElementById('next');

prev.onclick = () => {
  document.getElementById('slide').classList.remove('slide__picture-two');
};

next.onclick = () => {
  document.getElementById('slide').classList.add('slide__picture-two');
};

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menus') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});
