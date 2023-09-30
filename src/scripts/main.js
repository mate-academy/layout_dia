'use strict';

window.addEventListener('submit', (e) => {
  e.preventDefault();
  e.target.reset();
});

const ellipse = document.querySelector('.block-ellipse');
const infoText = document.querySelector('.slider-info');

window.addEventListener('hashchange', () => {
  window.location.hash === '#menu'
    ? ellipse.style.display = 'none'
    : ellipse.style.display = 'flex';

  window.location.hash === '#menu'
    ? infoText.style.display = 'none'
    : infoText.style.display = 'block';

  window.location.hash === '#menu'
    ? document.body.classList.add('body--nav-menu')
    : document.body.classList.remove('body--nav-menu');
});

window.addEventListener('load', () => {
  window.location.hash === '#menu'
    ? document.body.classList.add('body--nav-menu')
    : document.body.classList.remove('body--nav-menu');
});

const slide = document.getElementById('right');
const prev = document.getElementById('left-btn');
const next = document.getElementById('right-btn');

prev.addEventListener('click', () => {
  if (!slide.classList.contains('show')) {
    slide.classList.add('show');
  }
});

next.addEventListener('click', () => {
  if (slide.classList.contains('show')) {
    slide.classList.remove('show');
  }
});
