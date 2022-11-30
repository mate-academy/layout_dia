'use strict';

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
  } else {
    document.body.classList.remove('page__body--with-menu');
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const images = document
    .querySelectorAll('.header__slider .header__slider--line .img');
  const sliderLine = document.querySelector('.header__slider--line');
  let count = 0;
  let width;

  function init() {
  // console.log('resize');
    width = document.querySelector('.header__slider').offsetWidth;
    sliderLine.style.width = width * images.length + 'px';

    images.forEach(item => {
      item.style.width = width + 'px';
      item.style.height = 'auto';
    });
    rollSlider();
  }

  window.addEventListener('resize', init);
  init();

  document.querySelector('.slider__control-prev')
    .addEventListener('click', function() {
      count--;

      if (count < 0) {
        count = images.length - 1;
      }
      rollSlider();
    });

  document.querySelector('.slider__control-next')
    .addEventListener('click', function() {
      count++;

      if (count >= images.length) {
        count = 0;
      }
      rollSlider();
    });

  function rollSlider() {
    sliderLine.style.transform = 'translate(-' + count * width + 'px)';
  }
});

document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.form');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    form.reset();
  });
});
