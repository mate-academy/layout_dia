'use strict';

let offset = 0;
const sliderLine = document.querySelector('.slider__items');

document.querySelector(
  '.slider__button--right'
).addEventListener('click', function() {
  offset = offset + 320;

  if (offset > 640) {
    offset = 0;
  }

  sliderLine.style.left = -offset + 'px';
});

document.querySelector(
  '.slider__button--left'
).addEventListener('click', function() {
  offset = offset - 320;

  if (offset < 0) {
    offset = 640;
  }

  sliderLine.style.left = -offset + 'px';
});

const myform = document.querySelector('#myform');

myform.addEventListener('submit', checkSubmit);

function checkSubmit(event) {
  event.preventDefault();
}

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#hiddenmenu') {
    document.body.classList.add('page__body--with-hiddenmenu');
  } else {
    document.body.classList.remove('page__body--with-hiddenmenu');
  }
});
