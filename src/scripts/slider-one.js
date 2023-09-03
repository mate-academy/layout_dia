'use strict';

// const page = document.querySelector('.page');
const sliderOne = document.getElementById('sliderOne');
const btnSliderOneNext = document.querySelector('.button__arrow--next');
const btnSliderOnePrev = document.querySelector('.button__arrow--prev');
const slideQuantity = 3;

const posInit = {
  X: 0.0, Y: 0.0,
};
const posFinal = {
  X: 0.0, Y: 0.0,
};

/**
 * @param {Number} currentIndx
 * @param {Number} length
 * @returns {Number} */
function NextIndx(currentIndx = 0, length = 0) {
  return (+currentIndx + 1) % length;
};

/**
 * @param {Number} currentIndx
 * @param {Number} length
 * @returns {Number} */
function PrevIndx(currentIndx = 0, length = 0) {
  return (+currentIndx + (length - 1)) % length;
};

/**
 * @param {Event} evt
 * @param {Number} direction
 * @returns {Number | undefined} */
function SliderOneSwap(evt, direction = 1) {
  /* class="slider slider--img--0" */
  if (sliderOne.classList[1] !== undefined) {
    const talkens = (sliderOne.classList[1])
      .match(/(.*)(\d+)(.*)/);/* (slider--img--)(0)()" */

    if (talkens.length !== 4) {
      throw new Error('talkens.length !== 4');
    }

    sliderOne.classList.remove(sliderOne.classList[1]);

    switch (direction) {
      case 1:
        sliderOne.classList.add(
          `${talkens[1]}`
        + `${NextIndx(+talkens[2], slideQuantity)}`
        + `${talkens[3]}`);

        return 0;

      case -1:
        sliderOne.classList.add(
          `${talkens[1]}`
          + `${PrevIndx(+talkens[2], slideQuantity)}`
          + `${talkens[3]}`);

        return 0;

      default:
        return undefined;
    }
  }
};

btnSliderOneNext.addEventListener('click', (evt) => SliderOneSwap(evt, 1));

btnSliderOnePrev.addEventListener('click', (evt) => SliderOneSwap(evt, -1));

sliderOne.ontouchstart = (evt) => {
  // const { clientX: X, clientY: Y } = evt.changedTouches[0];
  posInit.X = evt.changedTouches[0].clientX;
  posInit.Y = evt.changedTouches[0].clientY;

  // console.log(
  //   `\n\tposInit: x=${posInit.X}, y=${posInit.Y}`);
  evt.preventDefault();
};

sliderOne.ontouchmove = (evt) => {
  posFinal.X = evt.changedTouches[0].clientX;
  posFinal.Y = evt.changedTouches[0].clientY;
};

sliderOne.addEventListener('touchend', (evt) => {
  // console.log(`\n\tposFinal: x=${posFinal.X}, y=${posFinal.Y}`,
  //   `\n\tposInit: x=${posInit.X}, y=${posInit.Y}`);

  if (+posFinal.X < +posInit.X) {
    SliderOneSwap(evt, 1);
  }

  if (+posFinal.X > +posInit.X) {
    SliderOneSwap(evt, -1);
  }

  evt.preventDefault();
});
