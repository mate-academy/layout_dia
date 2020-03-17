'use strict';

// eslint-disable-next-line no-unused-vars
function myFunction() {
  document.querySelector('.hamburger').classList.toggle('change');

  document.querySelector('.main__info-block')
    .classList.toggle('main__info-block--mobile');

  const x = document.querySelector('.mobile-menu');

  if (x.style.display === 'block') {
    x.style.display = 'none';
  } else {
    x.style.display = 'block';
  }
}

let currentSlide = 1;

const slider = document.querySelector('.slider');
const nextButton = document.querySelector('.slider__arrow-box.right');
const prevButton = document.querySelector('.slider__arrow-box.left');

function setCurrentSlide() {
  slider
    .style
    .backgroundImage = `url(/images/slider/slide-${currentSlide}.png)`;
}

setCurrentSlide();

function nextSlide() {
  currentSlide += 1;

  if (currentSlide > 3) {
    currentSlide = 1;
  }
  setCurrentSlide();
}

function prevSlide() {
  currentSlide -= 1;

  if (currentSlide < 1) {
    currentSlide = 3;
  }
  setCurrentSlide();
}

nextButton.addEventListener('click', () => {
  nextSlide();
});

prevButton.addEventListener('click', () => {
  prevSlide();
});
