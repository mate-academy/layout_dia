'use strict';

const slider = document.querySelector('.strategicAgency__interactive');

const leftButton = document.querySelector('.strategicAgency__slider-left');
const rightButton = document.querySelector('.strategicAgency__slider-right');

let count = 1;

leftButton.addEventListener('click', () => {
  slider.classList.remove(`strategicAgency__slider--${count}`);

  if (count === 1) {
    count = 4;
  }
  count--;
  slider.classList.add(`strategicAgency__slider--${count}`);
});

rightButton.addEventListener('click', () => {
  slider.classList.remove(`strategicAgency__slider--${count}`);

  if (count === 3) {
    count = 0;
  }
  count++;
  slider.classList.add(`strategicAgency__slider--${count}`);
});
