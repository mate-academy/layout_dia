'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

let slideIndex = 1;

function slideShow(s) {
  let i;
  const slides = document.querySelectorAll('.slider__item');

  if (s > slides.length) {
    slideIndex = 1;
  }

  if (s < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
}

document.querySelector('#next').addEventListener('click', function(e) {
  e.preventDefault();
  slideShow(slideIndex += 1);
});

document.querySelector('#prev').addEventListener('click', function(e) {
  e.preventDefault();
  slideShow(slideIndex -= 1);
});

document.querySelector('#message-form').addEventListener('submit', (e) => {
  e.preventDefault();
  document.querySelector('#message-form').reset();
  window.location.hash = '#home';
});
