'use strict';

const slider = {
  currentItem: 0,
  photos: ['slide1.png', 'slide2.png', 'slide3.png'],
  next: function(el) {
    el.preventDefault();
    slider.currentItem++;

    if (slider.currentItem >= slider.photos.length) {
      slider.currentItem = 0;
    }

    const currentImage = slider.photos[slider.currentItem];

    document
      .querySelector('.slider__item > img')
      .setAttribute('src', 'images/slider/' + currentImage);
  },
  prev: function(el) {
    el.preventDefault();

    if (slider.currentItem === 0) {
      slider.currentItem = slider.photos.length - 1;
    } else {
      slider.currentItem--;
    }

    const currentImage = slider.photos[slider.currentItem];

    document
      .querySelector('.slider__item > img')
      .setAttribute('src', 'images/slider/' + currentImage);
  },
};
