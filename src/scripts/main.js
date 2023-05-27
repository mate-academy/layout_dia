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

const slides = [
  'slide-1',
  'slide-2',
  'slide-3',
];

const arrows = document.querySelectorAll('.slider__arrow');
const slider = document.querySelector('#slider');
let counter = 0;

arrows.forEach(function(arrow) {
  arrow.addEventListener('click', function(e) {
    e.preventDefault();

    if (arrow.classList.contains('slider__arrow--left')) {
      counter--;

      if (counter < 0) {
        counter = slides.length - 1;
      }

      slider.style.backgroundImage
      = `url("./images/slider/${slides[counter]}.jpg")`;
    }

    if (arrow.classList.contains('slider__arrow--right')) {
      counter++;

      if (counter > slides.length - 1) {
        counter = 0;
      }

      slider.style.backgroundImage
      = `url("https://plus.unsplash.com/premium_photo-1684952850821-8709c04b2b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3027&q=80")`;
    }
  });
});
