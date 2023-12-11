'use strict';

const slider = document.getElementById('slider');

const left = document.getElementById('goLeft');
const right = document.getElementById('goRight');

let counter = 1;

left.onclick = () => {
  counter--;

  if (counter < 0) {
    counter = 2;
  }

  slider.classList.remove(slider.classList[slider.classList.length - 1]);
  slider.classList.add(`slider--img-${counter}`);
};

right.onclick = () => {
  counter++;

  if (counter > 2) {
    counter = 0;
  }

  slider.classList.remove(slider.classList[slider.classList.length - 1]);
  slider.classList.add(`slider--img-${counter}`);
};
