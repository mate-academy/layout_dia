'use strict';

// slider

const sliderItem = document.querySelector('.slider__item');
const images = document.querySelectorAll('.slider__img');
let offset = 0;

sliderItem.style.width = 100 * images.length + '%';

images.forEach(item => {
  item.style.width = 100 / images.length + '%';
});

document.querySelector('.slider__button-next')
  .addEventListener('click', function() {
    offset = offset + 100 / images.length;

    if (offset > (100 / images.length) * images.length - 1) {
      offset = 0;
    }

    sliderItem.style.transform = 'translateX(-' + offset + '%)';
  });

document.querySelector('.slider__button-prev')
  .addEventListener('click', function() {
    offset = offset - 100 / images.length;

    if (offset < 0) {
      offset = (100 / images.length) * (images.length - 1);
    }

    sliderItem.style.transform = 'translateX(-' + offset + '%)';
  });
