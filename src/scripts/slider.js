'use strict';

const leftButton = document.querySelector('.slider__button--left');
const rightButton = document.querySelector('.slider__button--right');
const firstSlide = document.getElementById('slide-1');
const secondSlide = document.getElementById('slide-2');
const thirdSlide = document.getElementById('slide-3');

leftButton.addEventListener('click', function() {
  if (firstSlide.hasAttribute('checked')) {
    firstSlide.removeAttribute('checked');
    thirdSlide.setAttribute('checked', 'checked');
  } else if (secondSlide.hasAttribute('checked')) {
    secondSlide.removeAttribute('checked');
    firstSlide.setAttribute('checked', 'checked');
  } else if (thirdSlide.hasAttribute('checked')) {
    thirdSlide.removeAttribute('checked');
    secondSlide.setAttribute('checked', 'checked');
  }
});

rightButton.addEventListener('click', function() {
  if (firstSlide.hasAttribute('checked')) {
    firstSlide.removeAttribute('checked');
    secondSlide.setAttribute('checked', 'checked');
  } else if (secondSlide.hasAttribute('checked')) {
    secondSlide.removeAttribute('checked');
    thirdSlide.setAttribute('checked', 'checked');
  } else if (thirdSlide.hasAttribute('checked')) {
    thirdSlide.removeAttribute('checked');
    firstSlide.setAttribute('checked', 'checked');
  }
});
