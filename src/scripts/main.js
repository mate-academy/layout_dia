'use strict';

const
  imgs = document.querySelectorAll('.slider__item');
const btnLeft = document.querySelector('.slider__button--left');
const btnRight = document.querySelector('.slider__button--right');

let prevInd = 0;

btnLeft.onclick = function() {
  toggleImg(prevInd - 1 >= 0 ? prevInd - 1 : 0);
};

btnRight.onclick = function() {
  toggleImg(prevInd + 1 < imgs.length ? prevInd + 1 : imgs.length - 1);
};

function toggleImg(ind) {
  imgs[prevInd].classList.remove('slider__item--visible');
  imgs[ind].classList.add('slider__item--visible');
  prevInd = ind;
}
