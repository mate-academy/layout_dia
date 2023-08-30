'use strict';

// const page = document.querySelector('.page');
const slider = document.querySelector('.slider');
const btnSlideNext = document.querySelector('.button__arrow--next');
const btnSlidePrev = document.querySelector('.button__arrow--prev');
const slideQuantity = 3;

btnSlideNext.addEventListener('click', (evt) => {
  if (slider.classList[1] !== undefined) {
    const talkens = (slider.classList[1]).match(/(.*)(\d+)(.*)/);

    if (talkens.length !== 4) {
      throw new Error('talkens.length !== 4');
    }

    slider.classList.remove(slider.classList[1]);

    slider.classList.add(
      `${talkens[1]}`
      + `${(+talkens[2] + 1) % slideQuantity}`
      + `${talkens[3]}`);
  }
});

btnSlidePrev.addEventListener('click', (evt) => {
  if (slider.classList[1] !== undefined) {
    const talkens = (slider.classList[1]).match(/(.*)(\d+)(.*)/);

    if (talkens.length !== 4) {
      throw new Error('talkens.length !== 4');
    }

    slider.classList.remove(slider.classList[1]);

    slider.classList.add(
      `${talkens[1]}`
      + `${(+talkens[2] + (slideQuantity - 1)) % slideQuantity}`
      + `${talkens[3]}`);
  }
});
