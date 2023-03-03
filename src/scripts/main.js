'use strict';

// menu
window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

// slider
const sliderLine = document.querySelector('.slider__line');
const images = document.querySelectorAll('.slider__item');
let offset = 0;

sliderLine.style.width = 100 * images.length + '%';

images.forEach(item => {
  item.style.width = 100 / images.length + '%';
});

document.querySelector('.slider__button-next')
  .addEventListener('click', function() {
    offset = offset + 100 / images.length;

    if (offset > (100 / images.length) * images.length - 1) {
      offset = 0;
    }

    sliderLine.style.transform = 'translateX(-' + offset + '%)';
  });

document.querySelector('.slider__button-prev')
  .addEventListener('click', function() {
    offset = offset - 100 / images.length;

    if (offset < 0) {
      offset = (100 / images.length) * (images.length - 1);
    }

    sliderLine.style.transform = 'translateX(-' + offset + '%)';
  });

// form-reset
const form = document.getElementById('form-reload');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  event.target.reset();
});
