'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

const submit = document.querySelector('#myForm');

submit.addEventListener('submit', submitClick, false);

function submitClick(event) {
  event.preventDefault();
  event.target.reset();

  return false;
};

let slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

const nextButton = document.querySelector('.next__button');

nextButton.addEventListener('click', () => plusSlides(1), false);

const prevButton = document.querySelector('.prev__button');

prevButton.addEventListener('click', () => plusSlides(-1), false);

function showSlides(n) {
  let i;

  const slides = document.getElementsByClassName('slider__img');

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
