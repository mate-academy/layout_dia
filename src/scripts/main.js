'use strict';

// #region button
const firstSlideNum = 1;
const lastSlideNum = 3;
let currentSlideNum = 1;
let element = document.getElementById(`slide-${currentSlideNum}`);
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

function next() {
  prevButton.disabled = false;
  currentSlideNum++;
  element = document.getElementById(`slide-${currentSlideNum}`);
  element.style.transform = 'translate(0)';

  if (currentSlideNum === lastSlideNum) {
    nextButton.disabled = true;

    return (currentSlideNum = lastSlideNum);
  }
}

function prev() {
  nextButton.disabled = false;
  element = document.getElementById(`slide-${currentSlideNum}`);
  element.style.transform = 'translate(100%)';
  currentSlideNum--;

  if (currentSlideNum === firstSlideNum) {
    prevButton.disabled = true;

    return (currentSlideNum = firstSlideNum);
  }
}

prevButton.addEventListener('click', prev);
nextButton.addEventListener('click', next);
// #endregion
