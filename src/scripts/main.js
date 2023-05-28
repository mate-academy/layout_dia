'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

function submitForm(event) {
  event.preventDefault();
  document.querySelector('#form').reset();
  window.location.hash = '#home';
}

document.querySelector('#form').addEventListener('submit', submitForm);

let slideIndex = 1;

function displaySlides(n) {
  let i;
  const slides = document.querySelectorAll('.slider__item');

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }

  slides[slideIndex - 1].style.display = 'block';
}

document.querySelector('#next').addEventListener('click', function(e) {
  e.preventDefault();
  displaySlides(slideIndex += 1);
});

document.querySelector('#prev').addEventListener('click', function(e) {
  e.preventDefault();
  displaySlides(slideIndex += -1);
});
