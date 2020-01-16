'use strict';

const gallerySlider = () => {
  const slider = document.querySelector('.slider__list');
  const images = document.querySelectorAll('.slider__item');

  const prev = document.querySelector('.toggler-prev');
  const next = document.querySelector('.toggler-next');

  let counter = 1;
  const size = images[0].clientWidth;

  prev.addEventListener('click', () => {
    if (counter <= 0) {
      return;
    };
    slider.style.transition = 'transform 0.3s ease-in-out';
    counter--;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  });

  next.addEventListener('click', () => {
    if (counter >= images.length - 1) {
      return;
    };
    slider.style.transition = 'transform 0.3s ease-in-out';
    counter++;
    slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
  });

  slider.addEventListener('transitionend', () => {
    if (images[counter].id === 'last-clone') {
      slider.style.transition = 'none';
      counter = images.length - 2;
      slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }

    if (images[counter].id === 'first-clone') {
      slider.style.transition = 'none';
      counter = images.length - counter;
      slider.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
  });
};

gallerySlider();
